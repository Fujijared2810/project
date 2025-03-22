"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, BellIcon as BrandTelegram } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCard from "./animated-card"
import SectionHeader from "./section-header"
import { founders } from "@/data/founders"
import { getGradientByColor } from "@/lib/utils"

const FoundersSection = React.memo(function FoundersSection() {
  return (
    <section id="founders" className="relative py-28 bg-black" aria-labelledby="founders-heading">
      {/* Transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/20 to-black z-0"
        aria-hidden="true"
      ></div>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-20 z-0" aria-hidden="true">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full filter blur-[110px]"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
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
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(139, 92, 246, 0.3)"
                  : i % 3 === 1
                    ? "rgba(59, 130, 246, 0.3)"
                    : "rgba(236, 72, 153, 0.3)",
              filter: "blur(5px)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Section transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-black/80 z-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div id="founders-heading">
          <SectionHeader
            title="The Founders"
            description="Led by experienced traders with a passion for education, our team is dedicated to transforming ambitious individuals into successful traders."
            badgeText="Meet Our Team"
            gradientColors="from-purple-400 to-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <AnimatedCard key={founder.name} index={index * 0.15}>
              <motion.div whileHover={{ y: -10 }} className="h-full rounded-2xl overflow-hidden group">
                {/* Card with glow effect on hover */}
                <div className="relative h-full">
                  {/* Hover glow effect */}
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${
                        founder.color === "emerald"
                          ? "#10b981, #3b82f6"
                          : founder.color === "purple"
                            ? "#9333ea, #ec4899"
                            : founder.color === "sky"
                              ? "#0284c7, #4f46e5"
                              : "#d97706, #ef4444"
                      })`,
                    }}
                    aria-hidden="true"
                  ></div>

                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800/50 rounded-2xl overflow-hidden flex flex-col">
                    {/* Decorative header pattern */}
                    <div
                      className="absolute top-0 left-0 right-0 h-24 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.4' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                      aria-hidden="true"
                    ></div>

                    {/* Gradient header */}
                    <div
                      className="h-16 bg-gradient-to-r w-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${
                          founder.color === "emerald"
                            ? "#10b981, #3b82f6"
                            : founder.color === "purple"
                              ? "#9333ea, #ec4899"
                              : founder.color === "sky"
                                ? "#0284c7, #4f46e5"
                                : "#d97706, #ef4444"
                        })`,
                      }}
                      aria-hidden="true"
                    ></div>

                    {/* Profile Avatar */}
                    <div className="relative px-8">
                      <div className="absolute -top-12 left-8 p-1 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                        <div
                          className={`h-20 w-20 rounded-lg bg-gradient-to-br ${getGradientByColor(founder.color)} flex items-center justify-center text-white font-bold text-4xl shadow-lg`}
                        >
                          {founder.name.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 pt-12 flex-grow">
                      {/* Name and role */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                        <p
                          className={`text-sm inline-block py-1 px-3 rounded-full bg-opacity-20 ${
                            founder.color === "emerald"
                              ? "text-emerald-400 bg-emerald-900/20"
                              : founder.color === "purple"
                                ? "text-purple-400 bg-purple-900/20"
                                : founder.color === "sky"
                                  ? "text-sky-400 bg-sky-900/20"
                                  : "text-amber-400 bg-amber-900/20"
                          }`}
                        >
                          {founder.role}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-300 mb-6">{founder.bio}</p>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="text-xs px-2 py-1 rounded-full border border-gray-800 text-gray-400"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact links with improved styling */}
                    <div className="p-5 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-800/80">
                      <div className="flex flex-col space-y-3">
                        <motion.a
                          href={`https://t.me/${founder.telegram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-4 py-2.5 rounded-lg ${
                            founder.color === "emerald"
                              ? "bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/30"
                              : founder.color === "purple"
                                ? "bg-purple-900/20 text-purple-400 hover:bg-purple-900/30"
                                : founder.color === "sky"
                                  ? "bg-sky-900/20 text-sky-400 hover:bg-sky-900/30"
                                  : "bg-amber-900/20 text-amber-400 hover:bg-amber-900/30"
                          } transition-colors`}
                          whileHover={{ x: 5 }}
                          aria-label={`Contact ${founder.name} on Telegram`}
                        >
                          <BrandTelegram className="h-5 w-5 mr-3" aria-hidden="true" />
                          <span>{founder.telegramLabel || `@${founder.telegram}`}</span>
                        </motion.a>

                        {founder.email && (
                          <motion.a
                            href={`mailto:${founder.email}`}
                            className="flex items-center px-4 py-2.5 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-800 transition-colors"
                            whileHover={{ x: 5 }}
                            aria-label={`Email ${founder.name}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span className="text-sm">{founder.email}</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div
                      className="absolute top-20 right-0 w-20 h-20 opacity-10 transform rotate-45"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            variant="default"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 shadow-lg shadow-purple-900/20"
            onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
            aria-label="Connect with the Prodigy Trading Academy founders"
          >
            Connect With Our Founders <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
})

export default FoundersSection

