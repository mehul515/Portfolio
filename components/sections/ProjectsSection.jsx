"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web", "ML"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleProjects(6)
  }

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#020817]">
      <div className="container mx-auto px-4 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent projects and applications.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full px-6 ${activeCategory === category ? "gradient-bg text-white" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={loadMoreProjects} variant="outline" className="px-6 rounded-full">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
