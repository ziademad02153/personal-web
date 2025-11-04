"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import TypingAnimation from "@/components/typing-animation"

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
                    <div className="relative mx-auto group w-80 h-80 sm:w-96 sm:h-96 animate-professional-hover">
                      <div className="w-full h-full relative">
                        {/* Professional 3D Frame */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-900/50 backdrop-blur-sm border-2 border-white/20 shadow-2xl animate-professional-glow"></div>
                        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/30"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent backdrop-blur-sm"></div>

                        {/* Main Photo with Professional Frame */}
                        <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:border-white/70">
                          <Image
                            src="/images/ziad-profile.jpg"
                            alt="Ziad Emad Allam - Full Stack Developer"
                            width={320}
                            height={320}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            priority
                          />
                        </div>

                        {/* Professional Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

              <div
                className={`flex-1 text-center lg:text-left order-2 lg:order-2 ${isVisible ? "animate-slide-in-right animate-delay-400" : "opacity-0"}`}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight font-poppins">
                      <span className={`${showTypewriter ? "animate-text-shimmer" : ""}`}>
                        Ziad Emad Allam
                      </span>
                    </h1>

                        <div className={`inline-block ${isVisible ? "animate-scale-in animate-delay-600" : "opacity-0"}`}>
                          <div className="glass-card-enhanced px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm hover-lift">
                            <span className="text-lg sm:text-xl lg:text-2xl font-semibold gradient-text-animated font-poppins">
                              <TypingAnimation
                                texts={[
                                  "Full Stack Developer",
                                  "Software Engineer",
                                  "AI Integration Specialist",
                                  "Software Tester",
                                  "Problem Solver"
                                ]}
                              />
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
                    
                    {/* Enhanced Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">3+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">50+ Projects</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">100% Client Satisfaction</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6 ${isVisible ? "animate-bounce-in animate-delay-800" : "opacity-0"}`}
                  >
                        <Button
                          size="lg"
                          className="btn-responsive bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 hover-lift"
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
                          className="btn-responsive glass-card-enhanced border-2 border-white/30 hover:border-white/50 text-white bg-transparent font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift"
                          asChild
                        >
                          <a
                            href="https://drive.google.com/file/d/1m4mLlXfmer5N9iIC4Tjk7-cncSPkBCTY/view?usp=drivesdk"
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
                  className="glass-card-enhanced rounded-full w-12 h-12 sm:w-14 sm:h-14 hover:bg-white/10 transition-all duration-300 animate-glow-pulse hover-lift hover:scale-110"
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
