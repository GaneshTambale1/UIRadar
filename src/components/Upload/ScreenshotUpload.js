"use client";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../contexts/ServiceContext";
import Header from "../Layout/Header";
import "./ScreenshotUpload.css";

const ScreenshotUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { selectedService } = useService();
  const navigate = useNavigate();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFiles = (fileList) => {
    if (!fileList) return;
    const newFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    try {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/analysis");
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="screenshot-upload">
      <Header />
      <div className="container">
        <div className="upload-header">
          <h1>Upload Screenshots</h1>
          <p>
            Upload your website screenshots for{" "}
            {selectedService === "heatmap"
              ? "heatmap analysis"
              : "WCAG compliance check"}.
          </p>
        </div>

        <div
          className={`upload-zone ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <label className="upload-content">
            <div className="upload-icon">📁</div>
            <h3>Drag & Drop Screenshots</h3>
            <p>or click to browse files</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFiles(e.target.files)}
              className="file-input"
              style={{ display: "none" }}
            />
          </label>
        </div>

        {files.length > 0 && (
          <div className="file-list">
            <h3>Uploaded Files ({files.length})</h3>
            <div className="files-grid">
              {files.map((file, index) => (
                <div key={index} className="file-item">
                  <div className="file-preview">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="preview-image"
                    />
                  </div>
                  <div className="file-info">
                    <p className="file-name">{file.name}</p>
                    <p className="file-size">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFile(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="upload-actions">
          <button
            className={`upload-btn ${files.length > 0 ? "active" : ""}`}
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
          >
            {uploading
              ? "Processing..."
              : `Analyze ${files.length} Screenshot${
                  files.length !== 1 ? "s" : ""
                }`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotUpload;
