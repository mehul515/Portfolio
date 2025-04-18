"use client"

import { motion } from "framer-motion"
import { journey } from "@/data/journey"
import { GraduationCap, Briefcase } from "lucide-react"

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 bg-background dark:bg-gray-900/30 dark:tech-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Timeline</h2>
          <div className="h-1 w-20 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and professional experience.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-blue-400"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary z-10">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-50 blur-sm"></div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
                    <div className="dark:tech-card dark:tech-border dark:tech-glow timeline-card p-6">
                      <div className="flex items-center mb-2">
                        <div className="mr-2 text-primary">
                          {item.type === "education" ? (
                            <GraduationCap className="h-5 w-5" />
                          ) : (
                            <Briefcase className="h-5 w-5" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-primary">
                          {item.type === "education" ? "Education" : "Experience"}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{item.organization}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{item.period}</p>

                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
