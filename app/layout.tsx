import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono, Poppins, Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "vietnamese"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "vietnamese"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Ziad Emad Allam - Full Stack Developer | مطور متكامل",
  description:
    "Professional Full Stack Developer with expertise in modern web technologies, software testing, and AI integration. Specialized in creating innovative solutions and delivering high-quality software.",
  keywords:
    "Full Stack Developer, مطور متكامل, Software Engineer, React, Node.js, AI Tools, Portfolio, Egypt, Data Analysis, Software Testing",
  authors: [{ name: "Ziad Emad Allam" }],
  creator: "Ziad Emad Allam",
  openGraph: {
    title: "Ziad Emad Allam - Full Stack Developer | مطور متكامل",
    description: "Professional Full Stack Developer with expertise in modern web technologies, software testing, and AI integration",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Emad Allam - Full Stack Developer | مطور متكامل",
    description: "Professional Full Stack Developer with expertise in modern web technologies, software testing, and AI integration",
  },
  generator: "Next.js",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${poppins.variable} ${robotoMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
