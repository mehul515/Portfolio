import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { contact } from "@/data/contact"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background dark:bg-gray-900/30 dark:grid-bg border-t border-gray-200 dark:border-gray-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-heading">Mehul Kohad</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">CSE Student | MERN Developer | ML Enthusiast</p>
            <div className="flex space-x-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#home"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">{contact.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">{contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800/50 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Mehul Kohad. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
