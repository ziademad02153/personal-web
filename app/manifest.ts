import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ziad Emad Allam - Full Stack Developer',
    short_name: 'ZEA Portfolio',
    description: 'Professional Full Stack Developer with expertise in modern web technologies, software testing, and AI integration',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
