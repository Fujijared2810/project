"use client"

import React from "react"
import { motion } from "framer-motion"

const Footer = React.memo(function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black py-20" aria-labelledby="footer-heading">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-900/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-900/5 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand column - wider on desktop */}
          <motion.div
            className="md:col-span-5 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold text-white">Prodigy Trading</h3>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Empowering traders worldwide with professional education and mentorship. Transform your trading journey
              through expert guidance, proven strategies, and a supportive community.
            </p>

            {/* Social media links */}
            <div className="flex space-x-4 mb-6">
              {[
                {
                  icon: "M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 2.6a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 2c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z",
                  name: "Twitter",
                },
                {
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  name: "LinkedIn",
                },
                {
                  icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                  name: "GitHub",
                },
                {
                  icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.892 5.017 15.294 5 12c.017-3.294.282-4.892 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.108 18.982 8.706 19 12c-.018 3.294-.282 4.892-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z",
                  name: "YouTube",
                },
                {
                  icon: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.465-3.192c-.379.168-.786.282-1.213.333.437-.262.772-.675.931-1.169-.409.242-.86.418-1.341.513-.385-.41-.935-.667-1.542-.667-1.167 0-2.112.945-2.112 2.111 0 .166.018.327.054.482-1.754-.088-3.31-.927-4.352-2.203-.181.311-.286.673-.286 1.058 0 .733.373 1.379.94 1.757-.346-.01-.671-.106-.956-.264v.026c0 1.023.728 1.877 1.694 2.07-.177.049-.364.074-.556.074-.136 0-.268-.014-.397-.038.268.838 1.048 1.449 1.972 1.466-.723.566-1.633.904-2.622.904-.17 0-.338-.01-.503-.03.935.6 2.044.95 3.237.95 3.883 0 6.007-3.217 6.007-6.008 0-.091-.002-.183-.006-.273.413-.297.77-.667 1.054-1.089l-.019-.009z",
                  name: "Telegram",
                },
              ].map((social) => (
                <motion.a
                  href="#"
                  key={social.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-100 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon}></path>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation columns */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Programs",
                items: [
                  { label: "VIP Program", href: "#mentorship-programs" },
                  { label: "Supreme Program", href: "#mentorship-programs" },
                  { label: "Free Resources", href: "#strategy-finder" },
                ],
              },
              {
                title: "Resources",
                items: [
                  { label: "Trading Tools", href: "#strategy-finder" },
                  { label: "Market Analysis", href: "#partners" },
                  { label: "FAQ", href: "#faq" },
                ],
              },
              {
                title: "Contact Us",
                items: [
                  { label: "Join us on Telegram", href: "https://t.me/PTAStudentBot" },
                  { label: "support@prodigytrading.com", href: "mailto:support@prodigytrading.com" },
                  { label: "Available 24/7", href: "#partners" },
                  { label: "Partner Program", href: "#founders" },
                ],
              },
            ].map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <motion.a
                        href={item.href}
                        className="text-gray-400 hover:text-blue-400 flex items-center group"
                        whileHover={{ x: 4 }}
                        aria-label={item.label}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-gray-700 group-hover:bg-blue-500 mr-2 transition-colors"
                          aria-hidden="true"
                        ></span>
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar with copyright and links */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2025 Prodigy Trading Academy. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Disclaimer
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
})

export default Footer

