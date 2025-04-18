"use client"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-none shadow-md hover-card dark:tech-card dark:tech-border dark:tech-glow max-w-">
      <div className="h-48 overflow-hidden bg-gradient-to-r from-primary/5 to-blue-500/5">
        {project.image ? (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold gradient-heading">{project.title}</h3>
          <div className="flex space-x-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary hover:bg-primary/10 rounded-full"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary hover:bg-primary/10 rounded-full"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/projects/${project.slug}`} className="w-full">
          <Button
            variant="outline"
            className="w-full group rounded-md dark:border-gray-700 dark:hover:border-primary"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
