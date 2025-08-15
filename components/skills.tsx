"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Code, Database, Brain, TestTube, Palette, Server, Globe } from "lucide-react"

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Angular v19", level: 75 },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "PHP", level: 80 },
        { name: "RESTful APIs", level: 95 },
        { name: "JWT Authentication", level: 88 },
        { name: "Socket.IO", level: 85 },
      ],
    },
    {
      name: "Database & Cloud",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "SQLite", level: 85 },
        { name: "AWS Services", level: 80 },
        { name: "Git/GitHub", level: 95 },
      ],
    },
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 88 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 78 },
        { name: "Java", level: 75 },
      ],
    },
    {
      name: "Testing & QA",
      icon: <TestTube className="h-5 w-5" />,
      skills: [
        { name: "Automation Testing", level: 92 },
        { name: "Selenium", level: 88 },
        { name: "TestComplete", level: 85 },
        { name: "LabVIEW", level: 80 },
        { name: "Embedded Testing", level: 85 },
        { name: "3DEXPERIENCE", level: 82 },
      ],
    },
    {
      name: "AI & Tools",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "AI Prompt Engineering", level: 90 },
        { name: "GPT Integration", level: 88 },
        { name: "AI Workflow Automation", level: 85 },
        { name: "Data Analysis", level: 82 },
        { name: "Machine Learning", level: 75 },
      ],
    },
  ]

  const personalSkills = [
    "Problem Solving",
    "Team Leadership",
    "Adaptability",
    "Innovation",
    "Critical Thinking",
    "Communication",
    "Project Management",
    "Continuous Learning",
  ]

  const categories = ["All", ...skillCategories.map((cat) => cat.name)]
  const filteredCategories =
    selectedCategory === "All" ? skillCategories : skillCategories.filter((cat) => cat.name === selectedCategory)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-mono">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across modern technologies and development practices
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200 glass-card"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-all duration-300 glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {category.icon}
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Skills */}
          <Card className="animate-fade-in-up glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-center justify-center">
                <Palette className="h-5 w-5" />
                Personal Skills & Qualities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {personalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4 glass-card">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
