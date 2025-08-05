import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import AdminDashboard from "./components/Admin/AdminDashboard"
import AnalysisResults from "./components/Analysis/AnalysisResults"
import ForgotPassword from "./components/Auth/ForgotPassword"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import Dashboard from "./components/Dashboard/Dashboard"
import LandingPage from "./components/LandingPage"
import Payment from "./components/Payment/Payment"
import ProtectedRoute from "./components/ProtectedRoute"
import ReportGenerator from "./components/Reports/ReportGenerator"
import ServiceSelection from "./components/Services/ServiceSelection"
import Subscription from "./components/Subscription/Subscription"
import ScreenshotUpload from "./components/Upload/ScreenshotUpload"
import { AuthProvider } from "./contexts/AuthContext"
import { ServiceProvider } from "./contexts/ServiceContext"

function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <ServiceSelection />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <ScreenshotUpload />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analysis"
                element={
                  <ProtectedRoute>
                    <AnalysisResults />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <ReportGenerator />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/subscription"
                element={
                  <ProtectedRoute>
                    <Subscription />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </ServiceProvider>
    </AuthProvider>
  )
}

export default App
