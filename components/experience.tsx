"use client"

import { Building, GraduationCap, Calendar, MapPin, Code, TestTube, Brain } from "lucide-react"

export default function Experience() {
  const workExperience = [
    {
      title: "Software Engineer",
      company: "OpenQQuantify",
      duration: "Feb 2025 - Present",
      type: "Full-time",
      location: "Remote",
      description: "Leading software engineering initiatives and developing innovative solutions.",
      skills: ["Software Engineering", "System Design", "Team Leadership"],
      icon: Code
    },
    {
      title: "Full Stack Developer",
      company: "Upwork (Freelance)",
      duration: "Dec 2024 - Present",
      type: "Freelance",
      location: "Remote",
      description: "Delivering end-to-end web development solutions for international clients.",
      skills: ["React.js", "Node.js", "MongoDB", "Full Stack Development"],
      icon: Code
    },
    {
      title: "R&D Software Engineer",
      company: "Elaraby Group",
      duration: "Sep 2024 - Dec 2024",
      type: "Full-time",
      location: "Egypt",
      description: "Leading research and development in software testing for home appliances, implementing AI-based testing solutions.",
      skills: ["Automation Testing", "Python", "AI Testing", "Embedded Systems"],
      icon: TestTube
    },
    {
      title: "Product Development",
      company: "Elaraby Group",
      duration: "Sep 2024 - Dec 2024",
      type: "Full-time",
      location: "Egypt",
      description: "Working on product development and software testing for home appliances.",
      skills: ["Product Development", "Software Testing", "Quality Assurance"],
      icon: Code
    },
    {
      title: "Quality Assurance",
      company: "Elaraby Group",
      duration: "Oct 2023 - Sep 2024",
      type: "Full-time",
      location: "Egypt",
      description: "Ensuring quality standards and testing procedures for home appliances.",
      skills: ["Quality Assurance", "Testing", "Process Improvement"],
      icon: TestTube
    },
    {
      title: "Frontend Developer",
      company: "Upwork (Freelance)",
      duration: "Nov 2022 - Dec 2024",
      type: "Freelance",
      location: "Remote",
      description: "Created responsive and interactive user interfaces for various client projects.",
      skills: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      icon: Code
    }
  ]

  const training = [
    {
      title: "Full Stack Engineer",
      company: "Codesoft",
      duration: "Dec 2024 - 2025",
      type: "Internship",
      location: "Remote",
      description: "Developed comprehensive web applications using modern technologies and best practices.",
      skills: ["MERN Stack", "TypeScript", "API Development", "Database Design"],
      icon: GraduationCap
    },
    {
      title: "Software Development Self-Study",
      company: "Self-Directed Learning",
      duration: "May 2021 - Present",
      type: "Continuous Learning",
      location: "Remote",
      description: "Continuous learning and skill development in modern software development technologies.",
      skills: ["Modern Technologies", "Best Practices", "Skill Development"],
      icon: Brain
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            A journey of continuous growth and technical excellence
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white font-poppins flex items-center gap-3">
            <Building className="h-6 w-6" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <job.icon className="h-6 w-6 text-blue-400" />
                    <div>
                      <h4 className="text-xl font-bold text-white font-poppins">{job.title}</h4>
                      <p className="text-blue-400 font-inter">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 font-inter">{job.duration}</p>
                    <p className="text-sm text-white/60 font-inter">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span className="text-white/80 font-inter">{job.location}</span>
                </div>
                <p className="text-white/80 mb-4 font-inter">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-inter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Development */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white font-poppins flex items-center gap-3">
            <GraduationCap className="h-6 w-6" />
            Training & Development
          </h3>
          <div className="space-y-6">
            {training.map((course, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <course.icon className="h-6 w-6 text-green-400" />
                    <div>
                      <h4 className="text-xl font-bold text-white font-poppins">{course.title}</h4>
                      <p className="text-green-400 font-inter">{course.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 font-inter">{course.duration}</p>
                    <p className="text-sm text-white/60 font-inter">{course.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span className="text-white/80 font-inter">{course.location}</span>
                </div>
                <p className="text-white/80 mb-4 font-inter">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-inter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
