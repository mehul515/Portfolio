"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"

import { FaCogs } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiGit,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiGooglecloud,
  SiBootstrap,
  SiMysql,
  SiC,
  SiSupabase,
  SiPytorch,
} from "react-icons/si"

// Map of skill names to their icons
const skillIcons = {
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  Express: <SiExpress className="text-black dark:text-white" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  "SQL": <SiMysql className="text-[#00758F]" />,
  "Supabase": <SiSupabase className="text-[#3ECF8E]" />,
  "C Language": <SiC className="text-[#A8B9CC]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Tensorflow: <SiTensorflow className="text-[#FF6F00]" />,
  "Machine Learning": <FaCogs className="text-[#FF6F00]" />,
  "Deep Learning": <SiPytorch className="text-[#FF6F00]" />,
  Git: <SiGit className="text-[#F05032]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />
};
export default function SkillsSection() {
  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat()

  return (
    <section id="skills" className="py-20 dark:bg-gray-900/50 dark:dot-pattern dark:tech-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="dark:tech-card dark:tech-border dark:tech-glow skill-item">
                  <div className="skill-icon text-xl">
                    {skillIcons[skill] || (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-blue-400"></div>
                    )}
                  </div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
