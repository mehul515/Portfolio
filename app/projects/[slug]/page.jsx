"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import SEOHead from "@/components/SEOHead"

export default function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === slug)
    setProject(foundProject)
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto py-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-t-blue-500 border-b-blue-700 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link href="/#projects">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead title={`${project.title} | Mehul Kohad`} description={project.description} />
      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <Link href="/#projects" className="inline-block mb-5 mt-10 cursor-pointer">
          <Button variant="outline" size="sm" className="cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl overflow-hidden shadow-lg border"
        >
          <div className="h-[300px] md:h-[400px] relative bg-gradient-to-r from-blue-500 to-cyan-400">
            {project.image && (
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {project.title}
              </h1>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="gap-1">
                      <Github className="h-4 w-4" /> Code
                    </Button>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="gap-1  ">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                  Key Features
                </h2>
                <ul className="space-y-3 pl-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="flex-shrink-0 w-5 h-5 text-primary mt-0.5 mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                  Challenges & Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-8">{project.challenges}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  )
}