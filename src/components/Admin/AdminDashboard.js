"use client"

import { useState, useEffect } from "react"
import Header from "../Layout/Header"
import "./AdminDashboard.css"

const AdminDashboard = () => {
  const [adminStats, setAdminStats] = useState({
    totalUsers: 0,
    activeSubscriptions: 0,
    totalAnalyses: 0,
    revenue: 0,
    recentUsers: [],
    systemHealth: "good",
  })

  useEffect(() => {
    // Simulate loading admin data
    setAdminStats({
      totalUsers: 1247,
      activeSubscriptions: 892,
      totalAnalyses: 5634,
      revenue: 45780,
      recentUsers: [
        { id: 1, name: "John Doe", email: "john@example.com", plan: "Pro", joined: "2024-01-15" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Basic", joined: "2024-01-14" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", plan: "Enterprise", joined: "2024-01-13" },
      ],
      systemHealth: "good",
    })
  }, [])

  return (
    <div className="admin-dashboard">
      <Header />
      <div className="container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>System overview and user management</p>
        </div>

        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{adminStats.totalUsers.toLocaleString()}</h3>
              <p>Total Users</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon">💳</div>
            <div className="stat-content">
              <h3>{adminStats.activeSubscriptions.toLocaleString()}</h3>
              <p>Active Subscriptions</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{adminStats.totalAnalyses.toLocaleString()}</h3>
              <p>Total Analyses</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>${adminStats.revenue.toLocaleString()}</h3>
              <p>Monthly Revenue</p>
            </div>
          </div>
        </div>

        <div className="admin-content">
          <div className="system-health">
            <h2>System Health</h2>
            <div className={`health-indicator ${adminStats.systemHealth}`}>
              <div className="health-dot"></div>
              <span>All systems operational</span>
            </div>
          </div>

          <div className="recent-users">
            <h2>Recent Users</h2>
            <div className="users-table">
              <div className="table-header">
                <span>Name</span>
                <span>Email</span>
                <span>Plan</span>
                <span>Joined</span>
              </div>
              {adminStats.recentUsers.map((user) => (
                <div key={user.id} className="table-row">
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                  <span className={`plan-badge ${user.plan.toLowerCase()}`}>{user.plan}</span>
                  <span>{user.joined}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
