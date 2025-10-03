"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold gradient-text-animated mb-2">Ziad Emad Allam</h3>
            <p className="text-sm text-white/60">Full Stack Developer & Software Engineer</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop} 
            className="hover:bg-white/10 hover:scale-110 transition-all duration-300 hover-lift"
          >
            <ArrowUp className="h-5 w-5 text-white" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
