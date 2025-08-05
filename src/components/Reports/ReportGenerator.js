"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Layout/Header"
import "./ReportGenerator.css"

const ReportGenerator = () => {
  const [reportConfig, setReportConfig] = useState({
    includeHeatmap: true,
    includeSuggestions: true,
    includeMetrics: true,
    format: "pdf",
  })
  const [generating, setGenerating] = useState(false)
  const navigate = useNavigate()

  const handleConfigChange = (key, value) => {
    setReportConfig((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleGenerateReport = async () => {
    setGenerating(true)

    try {
      // Simulate report generation
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Navigate to subscription page
      navigate("/subscription")
    } catch (error) {
      console.error("Report generation failed:", error)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="report-generator">
      <Header />
      <div className="container">
        <div className="report-header">
          <h1>Generate Report</h1>
          <p>Customize your analysis report with the options below</p>
        </div>

        <div className="report-config">
          <div className="config-section">
            <h3>Report Content</h3>
            <div className="config-options">
              <label className="config-option">
                <input
                  type="checkbox"
                  checked={reportConfig.includeHeatmap}
                  onChange={(e) => handleConfigChange("includeHeatmap", e.target.checked)}
                />
                <span className="checkmark"></span>
                Include Heatmap Visualization
              </label>

              <label className="config-option">
                <input
                  type="checkbox"
                  checked={reportConfig.includeSuggestions}
                  onChange={(e) => handleConfigChange("includeSuggestions", e.target.checked)}
                />
                <span className="checkmark"></span>
                Include UI Suggestions
              </label>

              <label className="config-option">
                <input
                  type="checkbox"
                  checked={reportConfig.includeMetrics}
                  onChange={(e) => handleConfigChange("includeMetrics", e.target.checked)}
                />
                <span className="checkmark"></span>
                Include Performance Metrics
              </label>
            </div>
          </div>

          <div className="config-section">
            <h3>Export Format</h3>
            <div className="format-options">
              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="pdf"
                  checked={reportConfig.format === "pdf"}
                  onChange={(e) => handleConfigChange("format", e.target.value)}
                />
                <span className="radio-mark"></span>
                PDF Document
              </label>

              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="html"
                  checked={reportConfig.format === "html"}
                  onChange={(e) => handleConfigChange("format", e.target.value)}
                />
                <span className="radio-mark"></span>
                HTML Report
              </label>
            </div>
          </div>
        </div>

        <div className="report-preview">
          <h3>Report Preview</h3>
          <div className="preview-container">
            <div className="preview-page">
              <div className="preview-header">
                <h4>UIRADAR Analysis Report</h4>
                <p>Generated on {new Date().toLocaleDateString()}</p>
              </div>
              <div className="preview-content">
                {reportConfig.includeHeatmap && (
                  <div className="preview-section">
                    <h5>📊 Heatmap Analysis</h5>
                  </div>
                )}
                {reportConfig.includeSuggestions && (
                  <div className="preview-section">
                    <h5>💡 UI Suggestions</h5>
                  </div>
                )}
                {reportConfig.includeMetrics && (
                  <div className="preview-section">
                    <h5>📈 Performance Metrics</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="report-actions">
          <button
            className={`generate-btn ${generating ? "loading" : ""}`}
            onClick={handleGenerateReport}
            disabled={generating}
          >
            {generating ? "Generating Report..." : "Generate Report"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportGenerator
