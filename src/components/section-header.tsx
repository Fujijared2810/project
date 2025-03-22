"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  title: string
  description: string
  badgeText: string
  gradientColors?: string
}

export default function SectionHeader({
  title,
  description,
  badgeText,
  gradientColors = "from-blue-400 via-purple-400 to-pink-400",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <Badge
        variant="outline"
        className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
      >
        {badgeText}
      </Badge>
      <h2 className={`text-4xl font-bold mb-5 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}

