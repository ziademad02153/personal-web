"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Building } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "AUC Diploma in Data Analysis and Visualization with Python",
      issuer: "The American University in Cairo",
      score: "95%",
      category: "Data Science",
      year: "2024",
    },
    {
      title: "CS50 Harvard: Computer Science by EDX",
      issuer: "Harvard University",
      description: "Graduation project with problem solving and nine problem sets",
      category: "Computer Science",
      year: "2024",
    },
    {
      title: "Microsoft Certified: Develop AI Agents using Azure OpenAI",
      issuer: "Microsoft",
      description: "Azure OpenAI and Semantic Kernel SDK",
      category: "AI & Cloud",
      year: "2024",
    },
    {
      title: "DeepLearning.AI Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      category: "AI & Machine Learning",
      year: "2024",
    },
    {
      title: "Artificial Intelligence Course",
      issuer: "Google",
      score: "94%",
      duration: "40 hours",
      category: "AI & Machine Learning",
      year: "2024",
    },
    {
      title: "JavaScript Professional Certificate",
      issuer: "Mozilla",
      category: "Web Development",
      year: "2024",
    },
    {
      title: "Cisco Certified JavaScript Course",
      issuer: "Cisco",
      description: "Advanced function techniques and asynchronous programming",
      category: "Web Development",
      year: "2024",
    },
    {
      title: "NI Certified LabVIEW Developer",
      issuer: "National Instruments",
      category: "Embedded Systems",
      year: "2024",
    },
    {
      title: "Certified Agile Tester",
      issuer: "Automation Testing Institute",
      description: "Automation Testing specialization",
      category: "Software Testing",
      year: "2024",
    },
    {
      title: "Microsoft Certified: API Management",
      issuer: "Microsoft",
      description: "Explore API Management solutions",
      category: "Cloud & APIs",
      year: "2024",
    },
    {
      title: "Microsoft Certified: Azure Cosmos DB",
      issuer: "Microsoft",
      description: "Develop solutions that use Azure Cosmos DB",
      category: "Database & Cloud",
      year: "2024",
    },
    {
      title: "Microsoft Certified: Blob Storage",
      issuer: "Microsoft",
      description: "Develop solutions that use Blob storage",
      category: "Cloud Storage",
      year: "2024",
    },
    {
      title: "Microsoft Authentication Library",
      issuer: "Microsoft",
      description: "Implement authentication using Microsoft Authentication Library",
      category: "Security & Auth",
      year: "2024",
    },
    {
      title: "OpenJS Foundation Node.js Course",
      issuer: "OpenJS Foundation",
      category: "Backend Development",
      year: "2024",
    },
    {
      title: "Full Stack Developer Course",
      issuer: "LinkedIn Learning",
      description: "SQL, Node.js, PHP APIs",
      category: "Full Stack",
      year: "2024",
    },
    {
      title: "Data Analysis by Python",
      issuer: "Microsoft & LinkedIn",
      category: "Data Science",
      year: "2023",
    },
    {
      title: "React JS Library Course",
      issuer: "ITI Platform",
      category: "Frontend Development",
      year: "2023",
    },
    {
      title: "Node.js Course",
      issuer: "Free Code Camp",
      description: "Scalable, real-time applications with JavaScript runtime",
      category: "Backend Development",
      year: "2023",
    },
    {
      title: "TypeScript Course",
      issuer: "Free Code Camp",
      description: "Enhances JavaScript with type safety and better tooling",
      category: "Programming Languages",
      year: "2023",
    },
    {
      title: "Databases Course - SQL Server",
      issuer: "ITI Platform",
      description: "Completed 3-hour comprehensive test",
      category: "Database",
      year: "2023",
    },
    {
      title: "IBM Fundamentals: IT Software and Hardware",
      issuer: "IBM",
      category: "IT Fundamentals",
      year: "2023",
    },
    {
      title: "English Language Certification",
      issuer: "Embassy of United States of America",
      duration: "120 hours",
      category: "Language",
      year: "2023",
    },
    {
      title: "EFSET English Language Test",
      issuer: "International Institute EFSET",
      category: "Language",
      year: "2023",
    },
    {
      title: "Thinking Creativity",
      issuer: "LinkedIn Learning",
      description: "How to think outside the box and be different",
      category: "Soft Skills",
      year: "2023",
    },
    // شهادات إضافية من السيرة الذاتية
    {
      title: "Bachelor's Degree in Computer and Information",
      issuer: "Tanta University",
      description: "Computer Science and Information Technology",
      category: "Academic",
      year: "2021",
    },
    {
      title: "Data Analysis Diploma",
      issuer: "American University in Cairo",
      description: "Comprehensive data analysis and visualization program",
      category: "Data Science",
      year: "2021",
    },
    {
      title: "Software Testing Fundamentals",
      issuer: "Elaraby Group",
      description: "Comprehensive software testing and quality assurance",
      category: "Software Testing",
      year: "2023",
    },
    {
      title: "IoT Development Certification",
      issuer: "Elaraby Group",
      description: "Internet of Things and smart home automation",
      category: "Embedded Systems",
      year: "2023",
    },
    {
      title: "AI Tools Integration",
      issuer: "Self-Directed Learning",
      description: "AI-powered automation and workflow optimization",
      category: "AI & Machine Learning",
      year: "2023",
    }
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Web Development",
    "Cloud & APIs",
    "Data Science",
    "Software Testing",
    "Database & Cloud",
    "Full Stack",
    "Language",
    "Soft Skills",
    "Academic",
    "Embedded Systems",
    "Computer Science",
    "IT Fundamentals",
    "Programming Languages",
    "Database",
    "Security & Auth",
    "Cloud Storage",
    "Backend Development",
    "Frontend Development",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCertificates =
    selectedCategory === "All" ? certificates : certificates.filter((cert) => cert.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Machine Learning": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Web Development": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Cloud & APIs": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Data Science": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Software Testing": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Database & Cloud": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Full Stack": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Language: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      "Soft Skills": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      "Academic": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
      "Embedded Systems": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "Computer Science": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      "IT Fundamentals": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
      "Programming Languages": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      "Database": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
      "Security & Auth": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
      "Cloud Storage": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
      "Backend Development": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
      "Frontend Development": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-mono">Certificates & Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development across diverse technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-primary leading-tight mb-2">{cert.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="h-4 w-4" />
                        <span className="text-sm font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className={getCategoryColor(cert.category)}>{cert.category}</Badge>

                    {cert.description && <p className="text-sm text-muted-foreground">{cert.description}</p>}

                    <div className="flex flex-wrap gap-2">
                      {cert.score && (
                        <Badge variant="outline" className="text-xs">
                          Score: {cert.score}
                        </Badge>
                      )}
                      {cert.duration && (
                        <Badge variant="outline" className="text-xs">
                          Duration: {cert.duration}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center animate-fade-in-up">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{certificates.length}+</div>
                <div className="text-sm text-muted-foreground">Total Certificates</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in-up">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{categories.length - 1}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in-up">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-sm text-muted-foreground">Learning Hours</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in-up">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Highest Score</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
