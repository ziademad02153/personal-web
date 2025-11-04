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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none z-0" />
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Content */}
          <div className="relative z-50">
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
              solutions.<br/><br/>
              <strong>Latest Role:</strong> <br/>
              <span>R&amp;D Software Test Analyst, Elaraby Group (Sep 2024 - Dec 2024, Full-time, Egypt)</span><br/>
              Leading research and development in software testing for home appliances, implementing AI-based testing solutions.<br/>
              <em>Skills: Automation Testing, Python, AI Testing, Embedded Systems</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsVisible(false)}
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Portfolio
              </button>
                <button
                  type="button"
                  aria-label="Open GitHub profile"
                  className="px-10 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ textDecoration: 'none', minWidth: '180px', fontSize: '1.25rem', zIndex: 10 }}
                  onClick={() => {
                    try {
                      window.open("https://github.com/ziademad02153/ziademad02153", "_blank", "noopener,noreferrer")
                    } catch (e) {
                      alert("تعذر فتح رابط GitHub. يرجى المحاولة مرة أخرى أو نسخ الرابط يدويًا.")
                    }
                  }}
                >
                  <span className="flex items-center justify-center" style={{paddingRight: '8px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" style={{display: 'block'}}><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
                  </span>
                  <span style={{display: 'block'}}>GitHub</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
