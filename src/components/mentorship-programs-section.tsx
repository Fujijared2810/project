"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedCard from "./animated-card"
import SectionHeader from "./section-header"
import { vipBenefits, supremeBenefits } from "@/data/benefits"
import { Users, Crown } from "lucide-react"

interface MentorshipProgramsSectionProps {
  billingPeriod: string
  setBillingPeriod: (period: string) => void
}

const MentorshipProgramsSection = React.memo(function MentorshipProgramsSection({
  billingPeriod,
  setBillingPeriod,
}: MentorshipProgramsSectionProps) {
  return (
    <section
      id="mentorship-programs"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950"
      aria-labelledby="mentorship-programs-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Abstract shapes */}
        <div className="absolute left-1/4 top-32 w-64 h-64 bg-blue-500/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute right-1/4 bottom-32 w-72 h-72 bg-purple-500/5 rounded-full filter blur-[100px]"></div>

        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>
        </div>
      </div>

      {/* Section transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-gray-950 z-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div id="mentorship-programs-heading">
          <SectionHeader
            title="Mentorship Programs"
            description="Choose the perfect mentorship plan tailored to your goals, schedule, and commitment level."
            badgeText="Personalized Trading Education"
            />
        </div>

        {/* Pricing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 p-1.5 rounded-lg border border-gray-800 inline-flex">
            <button
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "monthly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingPeriod("monthly")}
              aria-pressed={billingPeriod === "monthly"}
              aria-label="Switch to monthly billing"
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "yearly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingPeriod("yearly")}
              aria-pressed={billingPeriod === "yearly"}
              aria-label="Switch to yearly billing"
            >
              Yearly <span className="text-xs ml-1 text-green-400"></span>
            </button>
          </div>
        </div>

        {/* Programs Comparison with Visual Price Indicator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* VIP Program */}
          <AnimatedCard index={0}>
            <motion.div whileHover={{ y: -10 }} className="h-full rounded-2xl overflow-hidden group">
              {/* Card with glow effect on hover */}
              <div className="relative h-full">
                {/* Hover glow effect */}
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"
                  aria-hidden="true"
                ></div>

                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800/80 overflow-hidden flex flex-col">
                  {/* Price tag ribbon */}
                  <div className="absolute -right-12 top-8 rotate-45 bg-blue-600 text-white px-12 py-1.5 shadow-lg font-semibold text-sm z-10">
                    Popular
                  </div>

                  {/* Card Header */}
                  <div className="p-6 text-center bg-gradient-to-r from-blue-900/30 to-blue-800/10 border-b border-gray-800">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-900/40 mb-4">
                      <Users className="h-8 w-8 text-blue-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">VIP Program</h3>
                    <div className="text-gray-400 text-sm mb-4">Complete trading foundation</div>

                    {billingPeriod === "monthly" ? (
                      <div className="space-y-4">
                        {/* Philippines Pricing */}
                        <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                            Philippines
                          </Badge>
                          <div className="mb-1 flex items-baseline justify-center">
                            <span className="text-2xl font-bold mr-2 text-white">499</span>
                            <span className="text-gray-400 text-sm">($8.70/mo)</span>
                          </div>
                        </div>

                        {/* Foreign Pricing */}
                        <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                            International
                          </Badge>
                          <div className="mb-1 flex items-baseline justify-center">
                            <span className="text-2xl font-bold mr-2 text-white">$25</span>
                            <span className="text-gray-400 text-sm">/month</span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500">Billed monthly</div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Philippines Yearly Pricing */}
                        <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                            Philippines
                          </Badge>
                          <div className="mb-1 flex items-baseline justify-center">
                            <span className="text-2xl font-bold mr-2 text-white">₱5,988</span>
                            <span className="text-gray-400 text-sm">($104.46/yr)</span>
                          </div>
                        </div>

                        {/* Foreign Yearly Pricing */}
                        <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                            International
                          </Badge>
                          <div className="mb-1 flex items-baseline justify-center">
                            <span className="text-2xl font-bold mr-2 text-white">$300</span>
                            <span className="text-gray-400 text-sm">/year</span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500">Billed annually</div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow">
                    <div className="space-y-4">
                      {vipBenefits.map((benefit, index) => (
                        <motion.div key={index} className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
                          <div className="p-1.5 rounded-full bg-blue-900/30 text-blue-400 mt-0.5 group-hover:bg-blue-800/50 transition-colors">
                            <benefit.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-0.5">{benefit.title}</h4>
                            <p className="text-sm text-gray-400">{benefit.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional features */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-blue-400" aria-hidden="true" />
                        <span className="text-gray-300">Weekly live mentoring sessions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-blue-400" aria-hidden="true" />
                        <span className="text-gray-300">Access to community forums</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-blue-400" aria-hidden="true" />
                        <span className="text-gray-300">Trade idea discussions</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-600/20"
                      onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                      aria-label={`Join VIP ${billingPeriod === "yearly" ? "Yearly" : "Monthly"} program`}
                    >
                      Join VIP {billingPeriod === "yearly" ? "Yearly" : "Monthly"}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <div className="text-center mt-4 text-xs text-gray-500">No long-term contracts, cancel anytime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedCard>

          {/* Supreme Program - Lifetime Membership */}
          <AnimatedCard index={1}>
            <motion.div whileHover={{ y: -10 }} className="h-full rounded-2xl overflow-hidden group">
              {/* Card with glow effect on hover */}
              <div className="relative h-full">
                {/* Hover glow effect */}
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"
                  aria-hidden="true"
                ></div>

                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800/80 overflow-hidden flex flex-col">
                  {/* Price tag ribbon */}
                  <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-12 py-1.5 shadow-lg font-semibold text-sm z-10">
                    Not Available
                  </div>

                  {/* Card Header */}
                  <div className="p-6 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/10 border-b border-gray-800">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-900/40 mb-4">
                      <Crown className="h-8 w-8 text-purple-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">Supreme Program</h3>
                    <div className="text-gray-400 text-sm mb-4">Advanced, personalized training</div>

                    {/* Unavailable pricing display */}
                    <div className="mb-1 flex items-baseline justify-center">
                      <span className="text-lg font-medium mr-2 text-gray-400">Limited Availability</span>
                    </div>
                    <div className="text-xs text-gray-500">Currently by invitation only</div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow">
                    <div className="space-y-4">
                      {supremeBenefits.map((benefit, index) => (
                        <motion.div key={index} className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
                          <div className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 mt-0.5 group-hover:bg-purple-800/50 transition-colors">
                            <benefit.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-0.5">{benefit.title}</h4>
                            <p className="text-sm text-gray-400">{benefit.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional features */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-purple-400" aria-hidden="true" />
                        <span className="text-gray-300">Personalized strategy development</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-purple-400" aria-hidden="true" />
                        <span className="text-gray-300">Direct access to senior mentors</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-purple-400" aria-hidden="true" />
                        <span className="text-gray-300">Trading psychology coaching</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-purple-400" aria-hidden="true" />
                        <span className="text-gray-300">Lifetime updates & upgrades</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg"
                      onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                      aria-label="Join the Supreme Program waitlist"
                    >
                      Join Waitlist <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <div className="text-center mt-4 text-xs text-gray-500">
                      Get notified when spots become available
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
})

export default MentorshipProgramsSection

