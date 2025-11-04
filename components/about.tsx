"use client"

import { MapPin, Calendar, GraduationCap, Languages, Award, Mail, Phone, Github, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-animated font-poppins">About Me</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-inter">
            Results-driven professional skilled in end-to-end web development, rigorous software testing, and AI-powered automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div className="glass-card-enhanced p-8 hover-lift">
            <h3 className="text-xl font-bold mb-6 text-white font-poppins">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 font-inter">Egypt</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 font-inter">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 font-inter">Bachelor's in Computer and Information - Tanta University</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 font-inter">Data Analysis Diploma - American University in Cairo</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 font-inter">Languages: Arabic (Native), English (Professional)</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card-enhanced p-8 hover-lift">
            <h3 className="text-xl font-bold mb-6 text-white font-poppins">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:ziademadbts@gmail.com" className="text-white/80 font-inter hover:text-blue-400 transition-colors">
                  ziademadbts@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+201140462022" className="text-white/80 font-inter hover:text-blue-400 transition-colors">
                  +201140462022
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-blue-400" />
                <a
                  href="https://github.com/ziademad02153/ziademad02153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-inter hover:text-blue-400 transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  github.com/ziademad02153/ziademad02153
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/ziad-emad-allam-02153z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-inter hover:text-blue-400 transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  linkedin.com/in/ziad-emad-allam-02153z
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-12">
          <div className="glass-card-enhanced p-8 hover-lift">
            <h3 className="text-xl font-bold mb-6 text-white text-center font-poppins">Professional Summary</h3>
            <p className="text-center leading-relaxed text-white/80 font-inter">
              Expert in designing robust systems, identifying critical bugs, and enhancing processes with intelligent tools. 
              Combines technical expertise with analytical thinking to deliver high-performance, error-free solutions. 
              Proactive, adaptable to new technologies, strong team player with excellent leadership, problem-solving skills, 
              and a passion for delivering innovative, scalable, user-centric solutions driving business growth.
            </p>
          </div>
        </div>

        {/* Key Skills */}
        <div className="mt-12">
          <div className="glass-card-enhanced p-8 hover-lift">
            <h3 className="text-xl font-bold mb-6 text-white font-poppins">Key Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white font-poppins">Technical Skills</h4>
                <ul className="space-y-2 text-white/80 font-inter">
                  <li>• Full Stack Web Development (React, Node.js, MongoDB)</li>
                  <li>• Software Testing & Quality Assurance</li>
                  <li>• AI Tools Integration & Automation</li>
                  <li>• Data Analysis & Visualization</li>
                  <li>• IoT Technologies & Smart Systems</li>
                  <li>• Project Management & Agile Methodologies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white font-poppins">Soft Skills</h4>
                <ul className="space-y-2 text-white/80 font-inter">
                  <li>• Leadership & Team Management</li>
                  <li>• Problem Solving & Critical Thinking</li>
                  <li>• Communication & Collaboration</li>
                  <li>• Adaptability & Continuous Learning</li>
                  <li>• Time Management & Organization</li>
                  <li>• Customer Focus & User Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
