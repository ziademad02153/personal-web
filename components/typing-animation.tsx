"use client"

import { useState, useEffect, useCallback, useMemo } from "react"

interface TypingAnimationProps {
  texts: string[]
  className?: string
}

export default function TypingAnimation({ texts, className = "" }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const fullText = useMemo(() => texts[currentTextIndex], [texts, currentTextIndex])

  const handleTyping = useCallback(() => {
    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      } else {
            setTimeout(() => setIsDeleting(true), 3000)
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
  }, [currentText, isDeleting, fullText, texts.length])

      useEffect(() => {
        const speed = isDeleting ? 100 : 150
        const timer = setTimeout(handleTyping, speed)
        return () => clearTimeout(timer)
      }, [handleTyping, isDeleting])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

