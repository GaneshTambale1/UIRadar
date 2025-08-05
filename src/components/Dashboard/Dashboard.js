"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Header from "../Layout/Header"
import "./Dashboard.css"

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    reportsGenerated: 0,
    avgScore: 0,
    recentAnalyses: [],
  })

  useEffect(() => {
    // Simulate loading dashboard data
    setStats({
      totalAnalyses: 12,
      reportsGenerated: 8,
      avgScore: 87,
      recentAnalyses: [
        { id: 1, name: "Homepage Analysis", score: 92, date: "2024-01-15", type: "heatmap" },
        { id: 2, name: "Product Page WCAG", score: 85, date: "2024-01-14", type: "wcag" },
        { id: 3, name: "Contact Form Analysis", score: 78, date: "2024-01-13", type: "heatmap" },
      ],
    })
  }, [])

  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome back, {user?.name || "User"}!</h1>
          <p>Here's your UI/UX analysis overview</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.totalAnalyses}</h3>
              <p>Total Analyses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-content">
              <h3>{stats.reportsGenerated}</h3>
              <p>Reports Generated</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>{stats.avgScore}</h3>
              <p>Average Score</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <Link to="/services" className="action-card">
                <div className="action-icon">🚀</div>
                <h3>New Analysis</h3>
                <p>Start a new UI/UX analysis</p>
              </Link>

              <Link to="/reports" className="action-card">
                <div className="action-icon">📊</div>
                <h3>Generate Report</h3>
                <p>Create detailed analysis reports</p>
              </Link>

              <Link to="/subscription" className="action-card">
                <div className="action-icon">⚡</div>
                <h3>Upgrade Plan</h3>
                <p>Access more features</p>
              </Link>
            </div>
          </div>

          <div className="recent-analyses">
            <h2>Recent Analyses</h2>
            <div className="analyses-list">
              {stats.recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="analysis-item">
                  <div className="analysis-info">
                    <h4>{analysis.name}</h4>
                    <p>{analysis.date}</p>
                  </div>
                  <div className="analysis-type">
                    <span className={`type-badge ${analysis.type}`}>
                      {analysis.type === "heatmap" ? "🔥 Heatmap" : "♿ WCAG"}
                    </span>
                  </div>
                  <div className="analysis-score">
                    <span className="score">{analysis.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
