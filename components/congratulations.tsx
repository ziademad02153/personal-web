"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function Congratulations() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show congratulations after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-purple-900/20 to-black border border-gray-800/50 p-12 text-center">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Congratulations!</h1>
            <p className="text-xl text-gray-300 mb-8">
              You just discovered{" "}
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Ziad's Portfolio
              </span>
            </p>
            <p className="text-gray-400 mb-8">
              Welcome to my professional portfolio showcasing full-stack development, AI integration, and innovative
              solutions.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
