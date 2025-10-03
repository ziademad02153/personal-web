'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-white/70 mb-6">
          Don't worry, we're on it. Please try again.
        </p>
        <Button
          onClick={reset}
          className="bg-white text-black hover:bg-white/90"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}


