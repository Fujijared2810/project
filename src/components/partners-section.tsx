"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "./section-header"
import { partners } from "@/data/partners"
import { getGradientByColor } from "@/lib/utils"

// Import partner logos
import xmLogo from "../img/XM.png"
import ExLogo from "../img/Exness.jpg"
import RoboForexLogo from "../img/Robo.png"

const logoMap: Record<string, string> = {
  "./img/XM.png": xmLogo,
  "./img/Exness.jpg": ExLogo,
  "./img/Robo.png": RoboForexLogo,
}

const PartnersSection = React.memo(function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative py-28 bg-gradient-to-b from-black/60 to-black"
      aria-labelledby="partners-heading"
    >
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.15), rgba(0, 0, 0, 0) 70%)",
        }}
        aria-hidden="true"
      ></div>

      {/* Animated particle background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            animate={{
              x: [Math.random() * 100, Math.random() * 100 - 50],
              y: [Math.random() * 100, Math.random() * 100 - 50],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              type: "tween",
            }}
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(59, 130, 246, 0.3)"
                  : i % 3 === 1
                    ? "rgba(139, 92, 246, 0.3)"
                    : "rgba(34, 197, 94, 0.3)",
              filter: "blur(8px)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Section transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/20 to-black z-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div id="partners-heading">
          <SectionHeader
            title="Our Partners"
            description="We've built strategic relationships with leading financial institutions to provide our students with exclusive benefits and opportunities."
            badgeText="Trusted By Professionals"
            gradientColors="from-blue-400 to-blue-600"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group h-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getGradientByColor(partner.color)} rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300`}
                aria-hidden="true"
              ></div>
              <div className="relative bg-gradient-to-b from-gray-900/80 to-black p-8 rounded-xl border border-gray-800 group-hover:border-blue-500/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Top ribbon */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getGradientByColor(partner.color)}`}
                  aria-hidden="true"
                ></div>

                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className={`absolute -inset-2 bg-${partner.color}-600/20 blur-md rounded-full`}
                      aria-hidden="true"
                    ></div>
                    <img
                      src={logoMap[partner.logoPath] || "/placeholder.svg"}
                      alt={`${partner.name} Logo`}
                      className="h-24 w-auto relative"
                    />
                  </motion.div>
                  <Badge
                    variant="outline"
                    className={`border-${partner.color}-500 text-${partner.color}-400 bg-${partner.color}-900/20 backdrop-blur-sm`}
                  >
                    {partner.badgeText}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{partner.name}</h3>
                <p className="text-gray-300 mb-8 flex-grow">{partner.description}</p>

                {/* Benefits list */}
                <div className="mb-6 space-y-3">
                  {partner.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`bg-${partner.color}-900/30 rounded-full p-1 mr-3 mt-1`}>
                        <CheckCircle className={`h-3 w-3 text-${partner.color}-400`} aria-hidden="true" />
                      </div>
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-800">
                  <span className="text-sm text-gray-500">Since {partner.since}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-${partner.color}-700/50 hover:bg-${partner.color}-900/20 text-${partner.color}-400`}
                    onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                    aria-label={`View ${partner.name} partner benefits`}
                  >
                    Partner Benefits <ArrowRight className="ml-2 h-3 w-3" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators and call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 max-w-4xl mx-auto border border-gray-700/50"
        >
          <div className="flex items-center mb-6 md:mb-0 md:mr-6">
            <div className="bg-blue-900/30 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-white text-lg">Verified Partners</h4>
              <p className="text-gray-400 text-sm">All our partners undergo a strict verification process</p>
            </div>
          </div>
          <div className="md:ml-auto">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-900/30"
              onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
              aria-label="Become a partner with Prodigy Trading Academy"
            >
              Become a Partner <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default PartnersSection

