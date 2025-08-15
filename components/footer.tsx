"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp, MessageCircle, Rocket } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <Rocket className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl gradient-text font-mono">Ziad Emad Allam</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full Stack Developer, Software Tester, and AI Tools Expert passionate about creating innovative
              solutions and delivering high-quality software.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/ziademad02153" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ziad-emad-allam-02153z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ziademadbts@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/201140462022" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Full Stack Development</li>
              <li>Software Testing & QA</li>
              <li>AI Integration</li>
              <li>Mobile App Development</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              <span>Connect with me for collaboration opportunities</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={scrollToTop} className="hover:bg-primary/10">
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Back to top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
