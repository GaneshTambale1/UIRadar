"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h1 className="logo">UIRADAR</h1>
          </div>
          <div className="nav-links">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link signup-btn">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className={`hero ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-content">
            <h1 className="hero-title">
              Analyze Your UI/UX with
              <span className="gradient-text"> AI-Powered Insights</span>
            </h1>
            <p className="hero-description">
              Get comprehensive heatmap analysis, WCAG compliance checks, and actionable UI suggestions to improve your
              website's user experience and accessibility.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="cta-button primary">
                Start Free Analysis
              </Link>
              <Link to="/services" className="cta-button secondary">
                View Services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="card card-1">
                <div className="card-icon">📊</div>
                <h3>Heatmap Analysis</h3>
              </div>
              <div className="card card-2">
                <div className="card-icon">🎨</div>
                <h3>WCAG Compliance</h3>
              </div>
              <div className="card card-3">
                <div className="card-icon">💡</div>
                <h3>UI Suggestions</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Powerful Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h3>Heatmap with UI Suggestions</h3>
                <p>Advanced heatmap analysis with AI-powered UI improvement recommendations</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">♿</div>
                <h3>WCAG Color Correction</h3>
                <p>Ensure your website meets AA and AAA accessibility standards</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Screenshot Analysis</h3>
                <p>Upload screenshots and get instant analysis and suggestions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Detailed Reports</h3>
                <p>Generate comprehensive reports with actionable insights</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Improve Your UI/UX?</h2>
            <p>Join thousands of designers and developers who trust UIRADAR</p>
            <Link to="/signup" className="cta-button primary large">
              Get Started Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>UIRADAR</h3>
              <p>AI-Powered UI/UX Analysis Platform</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <Link to="/services">Services</Link>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 UIRADAR. Built with ❤️ for better web experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
