"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedCardProps {
  children: React.ReactNode
  index: number
  delay?: number
}

const AnimatedCard = React.memo(function AnimatedCard({ children, index, delay = 0.2 }: AnimatedCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
})

export default AnimatedCard

