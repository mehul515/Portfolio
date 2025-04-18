"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react"
import { contact } from "@/data/contact"
import TypewriterComponent from "typewriter-effect"
import SplineObject from "@/components/SplineObject"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden dark:tech-bg">
      {/* Background with improved gradient */} 
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-background dark:from-primary/5 dark:to-transparent -z-10"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-24 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="flex items-center mb-6">
              <div className="relative mr-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-heading">Mehul Kohad</span>
            </h1>

            <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-10">
              <TypewriterComponent
                options={{
                  strings: ["CSE Student", "Full Stack Developer", "Machine Learning Explorer", "Deep Learning Explorer", "DSA Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
            A passionate CSE student at YCCE, Nagpur, focused on building modern web applications and exploring the world of Machine Learning and Deep Learning. Skilled in the MERN stack, Data Structures & Algorithms, and dedicated to creating scalable solutions while continuously learning emerging technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary dark:border-primary dark:text-primary border-2 dark:hover:border-primary"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary dark:border-primary dark:text-primary border-2 dark:hover:border-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href={contact.resume} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary dark:border-primary dark:text-primary border-2 dark:hover:border-primary"
                >
                  <FileText className="h-5 w-5" />
                </Button>
              </a>
              <a href={contact.leetcode} target="_blank" rel="noopener noreferrer">
                <div className="object-fill flex justify-center items-center h-10 w-10 cursor-pointer rounded-full hover:bg-primary/10 hover:text-primary dark:border-primary dark:text-primary border-2 dark:hover:border-primary">

                <Image src="/leetcode.png" width={500} height={500} className="h-5 w-5" />
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button className="gradient-bg text-white rounded-md px-6">View Projects</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="rounded-md px-6 dark:border-gray-700 dark:hover:border-primary">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="w-full h-[500px] relative">
              <SplineObject />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
