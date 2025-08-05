"use client"

import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../Layout/Header"
import "./Payment.css"

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedPlan } = location.state || { selectedPlan: "pro" }

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [processing, setProcessing] = useState(false)

  const planPrices = {
    basic: 29,
    pro: 79,
    enterprise: 199,
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)

    try {
      // Simulate Razorpay payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      alert("Payment successful! Welcome to UIRADAR!")
      navigate("/dashboard")
    } catch (error) {
      console.error("Payment failed:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="payment">
      <Header />
      <div className="container">
        <div className="payment-container">
          <div className="payment-form">
            <div className="payment-header">
              <h1>Complete Payment</h1>
              <p>Secure payment powered by Razorpay</p>
            </div>

            <form onSubmit={handlePayment} className="payment-form-content">
              <div className="form-group">
                <label htmlFor="cardholderName">Cardholder Name</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter cardholder name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="123"
                    maxLength="3"
                  />
                </div>
              </div>

              <button type="submit" className={`payment-btn ${processing ? "processing" : ""}`} disabled={processing}>
                {processing ? "Processing..." : `Pay $${planPrices[selectedPlan]}/month`}
              </button>
            </form>

            <div className="payment-security">
              <div className="security-badges">
                <div className="security-badge">🔒 SSL Encrypted</div>
                <div className="security-badge">💳 Razorpay Secured</div>
              </div>
            </div>
          </div>

          <div className="payment-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Plan: {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span>
              <span>${planPrices[selectedPlan]}/month</span>
            </div>
            <div className="summary-item">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${planPrices[selectedPlan]}/month</span>
            </div>

            <div className="payment-features">
              <h4>What's included:</h4>
              <ul>
                <li>✓ Advanced UI/UX Analysis</li>
                <li>✓ WCAG Compliance Checking</li>
                <li>✓ Detailed Reports</li>
                <li>✓ Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
