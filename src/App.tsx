"use client"

import { useState } from "react"
import ErrorBoundary from "./components/error-boundary"
import { useScrollNavigation } from "./hooks/use-scroll-navigation"
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import StrategyFinderSection from "./components/strategy-finder-section"
import MentorshipProgramsSection from "./components/mentorship-programs-section"
import PartnersSection from "./components/partners-section"
import FoundersSection from "./components/founders-section"
import Footer from "./components/footer"

function App() {
  const { showNav } = useScrollNavigation()
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation showNav={showNav} />

      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <StrategyFinderSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <MentorshipProgramsSection billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
      </ErrorBoundary>

      <ErrorBoundary>
        <PartnersSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <FoundersSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App

