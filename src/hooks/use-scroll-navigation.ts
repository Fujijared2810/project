"use client"

import { useState, useEffect } from "react"
import { createDebouncedFunction } from "@/lib/utils"

export function useScrollNavigation() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Scroll handler function
    const handleScroll = createDebouncedFunction(() => {
      const currentScrollY = window.scrollY

      // Show nav when scrolling up, hide when scrolling down
      // Also always show nav when at the top of the page
      if (currentScrollY < 100) {
        setShowNav(true)
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }

      // Update last scroll position
      setLastScrollY(currentScrollY)
    }, 50)

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = ""
      handleScroll.cancel()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return { showNav }
}

