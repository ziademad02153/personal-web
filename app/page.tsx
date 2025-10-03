import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import ScrollProgress from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: "Ziad Emad Allam - Full Stack Developer Portfolio",
  description: "Explore the portfolio of Ziad Emad Allam, a professional Full Stack Developer specializing in React, Node.js, TypeScript, and AI integration. View projects, skills, and experience.",
  keywords: "Ziad Emad Allam, Full Stack Developer, React Developer, Node.js Developer, Portfolio, Web Development, Software Engineer, Egypt",
  openGraph: {
    title: "Ziad Emad Allam - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer Portfolio - React, Node.js, TypeScript, AI Integration",
    type: "website",
    url: "https://ziad-emad-allam.vercel.app",
  }
}

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <AnimatedBackground />
      <main className="relative">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
