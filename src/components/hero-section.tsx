"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <header
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      {/* Dynamic background with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-blue-950/40 z-1"
        aria-hidden="true"
      ></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 z-2"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cpath d="M0 0h40v40H0V0zm1 1v38h38V1H1z" fill="%23ffffff" fillOpacity="0.15"/%3E%3C/svg%3E\')',
        }}
        aria-hidden="true"
      ></div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden z-3" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            type: "tween",
          }}
          style={{ willChange: "transform, opacity" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[20%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            y: [0, 40, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
            type: "tween",
          }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Section transition element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-5"
        aria-hidden="true"
      ></div>

      {/* Content container with split layout */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left content - Main heading and description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-3/5 text-left mb-10 md:mb-0"
        >
          <Badge
            variant="outline"
            className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
          >
            The Future of Trading Education
          </Badge>

          {/* Academy Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Prodigy Trading Academy
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 rounded-full"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Master the</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Financial Markets
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            Transform your trading journey through expert guidance, proven strategies, and a community of successful
            traders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all text-white border-0 shadow-lg shadow-blue-900/30"
              onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
              aria-label="Start your trading journey"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
              aria-label="Explore trading methods"
            >
              Explore Methods
            </Button>
          </motion.div>
        </motion.div>

        {/* Right content - Featured card/graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-2/5 md:pl-8"
        >
          <div className="relative">
            {/* Card background with glow effect */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-75"
              aria-hidden="true"
            ></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm shadow-xl">
              {/* Card content - Trading chart mockup */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-green-500 rounded-full mr-2" aria-hidden="true"></span>
                  <span className="text-sm text-gray-400">EURUSD</span>
                </div>
                <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 text-xs">
                  Live Strategy
                </Badge>
              </div>

              {/* Mock chart */}
              <div
                className="h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded mb-4 overflow-hidden flex items-end"
                aria-label="Trading chart visualization"
              >
                <svg viewBox="0 0 100 30" className="w-full h-full" aria-hidden="true">
                  <path
                    d="M0,30 L5,28 L10,29 L15,26 L20,24 L25,26 L30,25 L35,19 L40,17 L45,13 L50,15 L55,10 L60,12 L65,8 L70,5 L75,7 L80,3 L85,2 L90,0 L95,3 L100,1"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.8)"
                    strokeWidth="1.5"
                  />
                  <path d="M0,30 L100,30" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Trading stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gray-800/50 rounded p-2">
                  <p className="text-xs text-gray-400">Win Rate</p>
                  <p className="text-base font-semibold text-green-400">78%</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2">
                  <p className="text-xs text-gray-400">ROI</p>
                  <p className="text-base font-semibold text-blue-400">32%</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2">
                  <p className="text-xs text-gray-400">Risk:Reward</p>
                  <p className="text-base font-semibold text-purple-400">1:3</p>
                </div>
              </div>

              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                aria-label="Learn about this trading strategy"
              >
                Learn This Strategy
              </Button>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl"
              aria-hidden="true"
            ></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-blue-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </header>
  )
}

