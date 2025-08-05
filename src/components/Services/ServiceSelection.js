"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useService } from "../../contexts/ServiceContext"
import Header from "../Layout/Header"
import "./ServiceSelection.css"

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState("")
  const { setSelectedService: setContextService } = useService()
  const navigate = useNavigate()

  const services = [
    {
      id: "heatmap",
      title: "Heatmap with UI Suggestion",
      description: "Advanced heatmap analysis with AI-powered UI improvement recommendations",
      icon: "🔥",
      features: [
        "User interaction heatmaps",
        "Click tracking analysis",
        "AI-powered UI suggestions",
        "Performance optimization tips",
      ],
    },
    {
      id: "wcag",
      title: "WCAG Color Correction",
      description: "Comprehensive accessibility analysis and color correction suggestions",
      icon: "♿",
      features: [
        "WCAG AA/AAA compliance check",
        "Color contrast analysis",
        "Accessibility recommendations",
        "Color palette suggestions",
      ],
    },
  ]

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId)
  }

  const handleContinue = () => {
    if (selectedService) {
      setContextService(selectedService)
      navigate("/upload")
    }
  }

  return (
    <div className="service-selection">
      <Header />
      <div className="container">
        <div className="service-header">
          <h1>Choose Your Service</h1>
          <p>Select the type of analysis you want to perform on your screenshots</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${selectedService === service.id ? "selected" : ""}`}
              onClick={() => handleServiceSelect(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <div className="service-selector">
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={selectedService === service.id}
                  onChange={() => handleServiceSelect(service.id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="service-actions">
          <button
            className={`continue-btn ${selectedService ? "active" : ""}`}
            onClick={handleContinue}
            disabled={!selectedService}
          >
            Continue to Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceSelection
