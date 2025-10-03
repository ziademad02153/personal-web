import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <Button className="bg-white text-black hover:bg-white/90">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}


