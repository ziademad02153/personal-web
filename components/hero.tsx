"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setTimeout(() => setShowTypewriter(true), 800)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
              <div
                className={`flex-shrink-0 order-1 lg:order-1 ${isVisible ? "animate-slide-in-left animate-delay-200" : "opacity-0"}`}
              >
                <div className="profile-3d-container relative mx-auto hover-lift">
                  <div className="w-full h-full relative">
                    {/* 3D Background Elements */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 animate-pulse-slow animate-glow-pulse"></div>
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-tr from-transparent to-white/5 backdrop-blur-sm"></div>

                    {/* Main Photo */}
                    <div className="absolute inset-2 sm:inset-4 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/ziad-profile.jpg"
                        alt="Ziad Emad Allam - Full Stack Developer"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>

                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full animate-float-1"></div>
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-white/15 rounded-full animate-float-2"></div>
                    <div className="absolute top-1/2 -left-4 sm:-left-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white/10 rounded-full animate-float-3"></div>
                  </div>
                </div>
              </div>

              <div
                className={`flex-1 text-center lg:text-left order-2 lg:order-2 ${isVisible ? "animate-slide-in-right animate-delay-400" : "opacity-0"}`}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight font-poppins">
                      <span className={`block ${showTypewriter ? "animate-text-shimmer" : ""}`}>Ziad Emad</span>
                      <span
                        className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/90 ${showTypewriter ? "animate-text-shimmer animate-delay-300" : ""}`}
                      >
                        Allam
                      </span>
                    </h1>

                    <div className={`inline-block ${isVisible ? "animate-scale-in animate-delay-600" : "opacity-0"}`}>
                      <div className="glass-card px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm hover-lift">
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white font-poppins">
                          Full Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0 ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0"}`}
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed font-inter">
                      Results-driven professional skilled in end-to-end web development, rigorous software testing, and AI-powered automation.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed font-inter">
                      Expert in designing robust systems, identifying critical bugs, and enhancing processes with intelligent tools. 
                      Combines technical expertise with analytical thinking to deliver high-performance, error-free solutions.
                    </p>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6 ${isVisible ? "animate-bounce-in animate-delay-800" : "opacity-0"}`}
                  >
                    <Button
                      size="lg"
                      className="btn-responsive bg-white text-black hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift"
                      asChild
                    >
                      <a href="#projects">
                        <span>Explore My Work</span>
                        <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="btn-responsive glass-card border-white/30 hover:border-white/50 text-white bg-transparent font-semibold hover:bg-white/10 transition-all duration-300 hover-lift"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1qUq7fWuh4UUVYX0Gm0Mu-jmacuVc6bGi/view?usp=drivesdk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Download Resume</span>
                        <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center mt-12 sm:mt-16 lg:mt-20 ${isVisible ? "animate-bounce-in animate-delay-1000" : "opacity-0"}`}
            >
              <div className="gentle-float">
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-card rounded-full w-12 h-12 sm:w-14 sm:h-14 hover:bg-white/10 transition-all duration-300 animate-glow-pulse hover-lift"
                  asChild
                >
                  <a href="#about">
                    <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
