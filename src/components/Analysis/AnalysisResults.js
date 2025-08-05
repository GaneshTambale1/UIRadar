"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useService } from "../../contexts/ServiceContext"
import Header from "../Layout/Header"
import "./AnalysisResults.css"

const AnalysisResults = () => {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState(null)
  const { selectedService } = useService()
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate analysis processing
    const timer = setTimeout(() => {
      setResults(generateMockResults())
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const generateMockResults = () => {
    if (selectedService === "heatmap") {
      return {
        type: "heatmap",
        score: 85,
        suggestions: [
          "Move the CTA button 20px higher for better visibility",
          "Increase font size of secondary text by 2px",
          "Add more whitespace around the navigation menu",
          "Consider using a warmer color for the primary button",
        ],
        heatmapData: {
          hotspots: [
            { x: 45, y: 30, intensity: 0.9 },
            { x: 60, y: 45, intensity: 0.7 },
            { x: 30, y: 60, intensity: 0.8 },
          ],
        },
      }
    } else {
      return {
        type: "wcag",
        compliance: "AA",
        score: 92,
        issues: [
          { type: "contrast", severity: "medium", count: 3 },
          { type: "alt-text", severity: "high", count: 1 },
          { type: "focus", severity: "low", count: 2 },
        ],
        colorSuggestions: [
          { original: "#666666", suggested: "#4a4a4a", reason: "Improve contrast ratio" },
          { original: "#cccccc", suggested: "#999999", reason: "Meet AA standards" },
        ],
      }
    }
  }

  const handleGenerateReport = () => {
    navigate("/reports")
  }

  if (loading) {
    return (
      <div className="analysis-results">
        <Header />
        <div className="container">
          <div className="loading-screen">
            <div className="loading-animation">
              <div className="spinner"></div>
            </div>
            <h2>Analyzing Your Screenshots</h2>
            <p>This may take a few moments...</p>
            <div className="progress-steps">
              <div className="step completed">Uploading files</div>
              <div className="step active">Processing images</div>
              <div className="step">Generating insights</div>
              <div className="step">Creating report</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="analysis-results">
      <Header />
      <div className="container">
        <div className="results-header">
          <h1>Analysis Complete</h1>
          <div className="score-badge">
            <span className="score">{results.score}</span>
            <span className="score-label">Score</span>
          </div>
        </div>

        {results.type === "heatmap" ? (
          <div className="heatmap-results">
            <div className="results-grid">
              <div className="heatmap-visualization">
                <h3>Heatmap Visualization</h3>
                <div className="heatmap-container">
                  <div className="heatmap-overlay">
                    {results.heatmapData.hotspots.map((spot, index) => (
                      <div
                        key={index}
                        className="hotspot"
                        style={{
                          left: `${spot.x}%`,
                          top: `${spot.y}%`,
                          opacity: spot.intensity,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="suggestions-panel">
                <h3>UI Suggestions</h3>
                <div className="suggestions-list">
                  {results.suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item">
                      <div className="suggestion-icon">💡</div>
                      <p>{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="wcag-results">
            <div className="compliance-status">
              <h3>WCAG Compliance: {results.compliance}</h3>
              <div className="issues-summary">
                {results.issues.map((issue, index) => (
                  <div key={index} className={`issue-badge ${issue.severity}`}>
                    <span className="issue-count">{issue.count}</span>
                    <span className="issue-type">{issue.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="color-suggestions">
              <h3>Color Corrections</h3>
              <div className="color-list">
                {results.colorSuggestions.map((color, index) => (
                  <div key={index} className="color-suggestion">
                    <div className="color-comparison">
                      <div className="color-box" style={{ backgroundColor: color.original }}>
                        <span>Original</span>
                      </div>
                      <div className="arrow">→</div>
                      <div className="color-box" style={{ backgroundColor: color.suggested }}>
                        <span>Suggested</span>
                      </div>
                    </div>
                    <p className="color-reason">{color.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="results-actions">
          <button className="generate-report-btn" onClick={handleGenerateReport}>
            Generate Detailed Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnalysisResults
