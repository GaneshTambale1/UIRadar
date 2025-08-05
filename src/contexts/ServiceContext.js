"use client"

import { createContext, useContext, useState } from "react"

const ServiceContext = createContext()

export const useService = () => {
  const context = useContext(ServiceContext)
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider")
  }
  return context
}

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [analysisResults, setAnalysisResults] = useState(null)

  const value = {
    selectedService,
    setSelectedService,
    uploadedFiles,
    setUploadedFiles,
    analysisResults,
    setAnalysisResults,
  }

  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}
