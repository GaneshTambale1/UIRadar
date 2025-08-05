"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Layout/Header"
import "./Subscription.css"

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro")
  const navigate = useNavigate()

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 29,
      features: ["5 screenshots per month", "Basic heatmap analysis", "WCAG compliance check", "Email support"],
    },
    {
      id: "pro",
      name: "Pro",
      price: 79,
      popular: true,
      features: [
        "50 screenshots per month",
        "Advanced heatmap analysis",
        "AI-powered UI suggestions",
        "Detailed reports",
        "Priority support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 199,
      features: [
        "Unlimited screenshots",
        "Custom analysis models",
        "API access",
        "Team collaboration",
        "Dedicated support",
      ],
    },
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
  }

  const handleSubscribe = () => {
    navigate("/payment", { state: { selectedPlan } })
  }

  return (
    <div className="subscription">
      <Header />
      <div className="container">
        <div className="subscription-header">
          <h1>Choose Your Plan</h1>
          <p>Select a subscription plan to continue with your analysis</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? "selected" : ""} ${plan.popular ? "popular" : ""}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="plan-selector">
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={selectedPlan === plan.id}
                  onChange={() => handlePlanSelect(plan.id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="subscription-actions">
          <button className="subscribe-btn" onClick={handleSubscribe}>
            Continue to Payment
          </button>
        </div>

        <div className="subscription-info">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">🔒</div>
              <h4>Secure Payment</h4>
              <p>Your payment information is encrypted and secure</p>
            </div>
            <div className="info-item">
              <div className="info-icon">↩️</div>
              <h4>Cancel Anytime</h4>
              <p>No long-term commitments, cancel your subscription anytime</p>
            </div>
            <div className="info-item">
              <div className="info-icon">💬</div>
              <h4>24/7 Support</h4>
              <p>Get help whenever you need it with our support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
