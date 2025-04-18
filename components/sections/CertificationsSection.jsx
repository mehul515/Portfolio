"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { certifications } from "@/data/certifications"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar } from "lucide-react"

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const nextSlide = () => {
    if (activeIndex < certifications.length - 1) {
      setActiveIndex(activeIndex + 1)
      scrollToCard(activeIndex + 1)
    }
  }

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
      scrollToCard(activeIndex - 1)
    }
  }

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  if (certifications.length === 0) {
    return null
  }

  return (
    <section id="certifications" className="py-20 dark:bg-[#020817] dark:dot-pattern">
      <div className="container mx-auto px-4 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses I've completed.
          </p>
        </motion.div>

        <div className="relative mx-auto">
          {/* Mobile View - Carousel */}
          <div className="md:hidden relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certifications.map((cert, index) => (
                <div key={index} className="w-full flex-shrink-0 snap-center px-4">
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    scrollToCard(index)
                  }}
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons - Mobile Only */}
          <div className="md:hidden flex justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="rounded-full dark:border-gray-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={activeIndex === certifications.length - 1}
              className="rounded-full dark:border-gray-700"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ certification }) {
  return (
    <div className="dark:tech-card dark:tech-border dark:tech-glow p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <Award className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold gradient-heading">{certification.title}</h3>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400 font-medium">{certification.issuer}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mt-1">
          <Calendar className="h-3.5 w-3.5 mr-1" />
          <span>{certification.date}</span>
        </div>
      </div>

      {certification.description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{certification.description}</p>
      )}

      {certification.url && (
        <a
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
        >
          View Certificate <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
      )}
    </div>
  )
}
