"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./Header.css"

const Header = () => {
  const { user, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="app-header">
      <nav className="navbar">
        <Link to="/dashboard" className="nav-brand">
          <h1 className="logo">UIRADAR</h1>
        </Link>

        <div className="nav-menu">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/reports" className="nav-link">
            Reports
          </Link>
        </div>

        <div className="nav-user">
          <div className="user-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="user-avatar">{user?.name?.charAt(0) || "U"}</div>
            <span className="user-name">{user?.name || "User"}</span>
            <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <Link to="/subscription" className="dropdown-item">
                Subscription
              </Link>
              {user?.role === "admin" && (
                <Link to="/admin" className="dropdown-item">
                  Admin
                </Link>
              )}
              <button onClick={handleLogout} className="dropdown-item logout">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
