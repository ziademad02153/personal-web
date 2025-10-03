"use client"

import { useState, useEffect, useCallback } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateScrollProgress = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = Math.min((window.scrollY / scrollHeight) * 100, 100)
      setScrollProgress(scrolled)
    })
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [updateScrollProgress])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 will-change-transform"
        style={{ 
          width: `${scrollProgress}%`,
          transform: 'translateZ(0)'
        }}
      />
    </div>
  )
}

