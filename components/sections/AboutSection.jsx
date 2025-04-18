"use client"

import { motion } from "framer-motion"
import { about } from "@/data/about"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 dark:bg-[#020817]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-400/5 to-blue-400/5 rounded-2xl"></div>

            <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-heading">{about.greeting}</span>
              </h3>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
