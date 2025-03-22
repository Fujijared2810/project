"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedCard from "./animated-card"
import SectionHeader from "./section-header"
import { strategies } from "@/data/strategies"

const StrategyFinderSection = React.memo(function StrategyFinderSection() {
  return (
    <section
      id="strategy-finder"
      className="relative py-24 overflow-hidden bg-black"
      aria-labelledby="strategy-finder-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600/20 rounded-full filter blur-[90px]"></div>
      </div>

      {/* Section transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-black z-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Strategy Finder"
          description="Discover the perfect trading approach that aligns with your personality, schedule, and financial goals."
          badgeText="Find Your Edge"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <AnimatedCard key={strategy.title} index={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/30 shadow-lg ${strategy.shadowColor} backdrop-blur-sm overflow-hidden flex flex-col`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${strategy.colors} px-6 py-5`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                    <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                      <strategy.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 mb-5 flex-grow">{strategy.description}</p>

                  <div className="space-y-4 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Difficulty</span>
                      <Badge variant="secondary" className={`bg-gray-800 text-xs font-medium`}>
                        {strategy.difficulty}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Timeframe</span>
                      <Badge variant="secondary" className={`bg-gray-800 text-xs font-medium`}>
                        {strategy.timeframe}
                      </Badge>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Elements</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {strategy.features.map((feature) => (
                        <div key={feature} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 mr-1.5 text-blue-400" aria-hidden="true" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <Button
                    className={`w-full bg-gradient-to-r ${strategy.colors} hover:opacity-90 transition-opacity text-white`}
                    onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                    aria-label={`Learn about ${strategy.title} strategy`}
                  >
                    Learn This Strategy <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Not sure which strategy suits you best? Talk to our expert mentors for personalized guidance.
          </p>
          <Button
            variant="outline"
            className="border-blue-500/50 hover:border-blue-400 text-blue-400 hover:bg-blue-900/20"
            onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
            aria-label="Get personalized strategy consultation"
          >
            Get Strategy Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
})

export default StrategyFinderSection

