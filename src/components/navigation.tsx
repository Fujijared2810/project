"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  showNav: boolean
}

const Navigation = React.memo(function Navigation({ showNav }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: showNav ? 0 : -100,
        opacity: showNav ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h3 className="text-xl font-bold text-white">Prodigy Trading</h3>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Strategy Finder", href: "#strategy-finder" },
              { name: "Programs", href: "#mentorship-programs" },
              { name: "Partners", href: "#partners" },
              { name: "Team", href: "#founders" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white rounded-md transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 text-sm hidden md:inline-flex"
              onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
              aria-label="Start trading now"
            >
              Start Trading <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
              onClick={() => alert("Mobile menu would open here")}
              aria-label="Open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
})

export default Navigation

