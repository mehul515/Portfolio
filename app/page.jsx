import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import JourneyTimeline from "@/components/sections/JourneyTimeline"
import CertificationsSection from "@/components/sections/CertificationsSection"
import ContactSection from "@/components/sections/ContactSection"
import SEOHead from "@/components/SEOHead"

export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneyTimeline />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
