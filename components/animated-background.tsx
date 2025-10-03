"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { 
      alpha: false,
      desynchronized: true // Better performance
    })
    if (!ctx) return

    // Set canvas size to full window with optimized DPI
    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit to 2x for performance
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `100vw`
      canvas.style.height = `100vh`
      ctx.scale(dpr, dpr)
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Star properties
    interface Star {
      x: number
      y: number
      z: number
      size: number
      speed: number
      opacity: number
    }

    const stars: Star[] = []
        const numStars = 300 // More stars for better effect
    const maxDepth = 2000

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        z: Math.random() * maxDepth,
        size: Math.random() * 2 + 0.5,
            speed: Math.random() * 1.0 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }

    // Animation loop
    let animationId: number
    let lastTime = 0
        const fps = 60
        const frameDelay = 1000 / fps
    
    const animate = (currentTime: number = 0) => {
      // Frame rate limiting for better performance
      if (currentTime - lastTime < frameDelay) {
        animationId = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime
      
          // Clear canvas with black background
          ctx.fillStyle = "#000000"
          ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw stars
      stars.forEach((star) => {
        // Move star towards viewer (3D effect)
        star.z -= star.speed

        // Reset star if it goes past viewer
        if (star.z <= 0) {
          star.x = Math.random() * window.innerWidth - window.innerWidth / 2
          star.y = Math.random() * window.innerHeight - window.innerHeight / 2
          star.z = maxDepth
          star.opacity = Math.random() * 0.8 + 0.2
        }

        // 3D projection
        const scale = 1000 / (1000 + star.z)
        const x2d = star.x * scale + window.innerWidth / 2
        const y2d = star.y * scale + window.innerHeight / 2
        const size2d = star.size * scale

        // Only draw if star is on screen
        if (x2d >= 0 && x2d <= window.innerWidth && y2d >= 0 && y2d <= window.innerHeight) {
          const brightness = 1 - star.z / maxDepth

          // Enhanced glow effect for better visibility
          if (star.z < 1000) {
            ctx.beginPath()
            const glowSize = size2d * 3
            const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, glowSize)
            gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * brightness * 0.6})`)
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * brightness * 0.2})`)
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
            ctx.fillStyle = gradient
            ctx.arc(x2d, y2d, glowSize, 0, Math.PI * 2)
            ctx.fill()
          }

          // Main star
          ctx.beginPath()
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * brightness})`
          ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2)
          ctx.fill()

          // Enhanced motion trail
          if (star.z < 500) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * brightness * 0.4})`
            ctx.lineWidth = size2d * 0.5
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(x2d + (star.x * scale * 0.02), y2d + (star.y * scale * 0.02))
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

      return (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full -z-10"
          style={{ 
            background: "#000000",
            willChange: "contents",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden" as const,
            perspective: 1000,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none"
          }}
        />
      )
}

