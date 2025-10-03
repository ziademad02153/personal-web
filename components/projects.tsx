"use client"

import { ExternalLink, Github, Code, Database, Brain, TestTube, Globe, Smartphone, Monitor, Cpu, ShoppingCart, Users, BarChart3, Shield, Zap } from "lucide-react"

export default function Projects() {
  const projects = [
    // مشاريع من السيرة الذاتية
    {
      title: "Project Management System",
      description: "Frontend: React.js | Material-UI | Framer Motion | React Router DOM. Backend: Node.js | Express.js | MongoDB | JWT Authentication | Socket.IO. Developed a comprehensive project management system using the MERN stack, designed to streamline project and task management for teams. The system features user authentication, real-time notifications, an analytics dashboard, and a modern, responsive UI with animations. It ensures a seamless user experience with robust back-end functionality, enhanced scalability, intuitive task prioritization, advanced search filters, customizable workflows, role-based access control, and cross-platform compatibility for efficient team collaboration.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.IO", "JWT", "Material-UI"],
      icon: Code
    },
    {
      title: "Home Appliance Control App Project Using IoT Technologies",
      description: "As part of developing innovative technical solutions to enhance modern lifestyles, a sophisticated application leveraging Internet of Things (IoT) technologies was created to provide users with full control over smart home appliances. This application integrates advanced functionalities, such as real-time device monitoring, remote access, and customizable automation settings, offering a seamless and efficient smart home experience.",
      technologies: ["IoT", "React Native", "Node.js", "WebSocket", "MQTT", "REST APIs"],
      icon: Smartphone
    },
    {
      title: "Software Testing Projects Elaraby group",
      description: "Comprehensive software testing initiatives for enterprise applications at Elaraby Group. Developed and executed test strategies, identified critical bugs, and ensured quality assurance across multiple projects. Implemented automated testing solutions and quality control processes for home appliance software systems.",
      technologies: ["Manual Testing", "Automated Testing", "Quality Assurance", "Bug Tracking", "Test Planning"],
      icon: TestTube
    },
    {
      title: "Advance Stock Analysis",
      description: "A comprehensive stock analysis and trading platform that provides real-time market data, advanced analytics, and predictive modeling. Features include technical analysis tools, portfolio management, risk assessment, and automated trading strategies. Built with modern web technologies and integrated with multiple financial data APIs.",
      technologies: ["React.js", "Python", "Data Analysis", "Financial APIs", "Chart.js", "Node.js"],
      icon: Database
    },
    {
      title: "Ai-Workflow-Automation",
      description: "An intelligent workflow automation system that leverages AI to streamline business processes. Features include process automation, intelligent routing, predictive analytics, and integration with various business tools. The system helps organizations reduce manual work, improve efficiency, and make data-driven decisions.",
      technologies: ["AI/ML", "Python", "React.js", "Node.js", "Automation", "API Integration"],
      icon: Brain
    },
    // مشاريع احترافية إضافية
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced features including product management, inventory tracking, payment processing, order management, and customer analytics. Built with modern web technologies for scalability and performance.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux", "JWT", "AWS"],
      icon: ShoppingCart
    },
    {
      title: "CRM System",
      description: "Enterprise-level Customer Relationship Management system with lead tracking, sales pipeline management, customer analytics, and automated reporting. Features include real-time dashboards and integration with third-party services.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Socket.IO", "Chart.js", "Docker"],
      icon: Users
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with interactive charts, data visualization, and predictive analytics. Provides insights into key performance indicators and business metrics with customizable reporting.",
      technologies: ["React.js", "Python", "D3.js", "Pandas", "NumPy", "FastAPI", "PostgreSQL"],
      icon: BarChart3
    },
    {
      title: "Authentication System",
      description: "Secure authentication and authorization system with multi-factor authentication, role-based access control, and session management. Includes password recovery, account verification, and security monitoring.",
      technologies: ["Node.js", "Express.js", "JWT", "bcrypt", "Redis", "MongoDB", "OAuth2"],
      icon: Shield
    },
    {
      title: "API Gateway",
      description: "High-performance API gateway with rate limiting, request routing, authentication, and monitoring. Built for microservices architecture with load balancing and caching capabilities.",
      technologies: ["Node.js", "Express.js", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"],
      icon: Zap
    },
    {
      title: "Data Processing Pipeline",
      description: "Scalable data processing system for handling large datasets with ETL operations, data transformation, and automated workflows. Includes data validation, error handling, and monitoring.",
      technologies: ["Python", "Apache Kafka", "Apache Spark", "PostgreSQL", "Redis", "Docker", "Airflow"],
      icon: Database
    },
    {
      title: "Microservices Architecture",
      description: "Distributed system built with microservices architecture including user service, product service, order service, and notification service. Features service discovery and inter-service communication.",
      technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "Redis", "RabbitMQ", "Prometheus"],
      icon: Cpu
    },
    {
      title: "Real-time Chat Application",
      description: "Real-time messaging application with group chats, file sharing, message encryption, and user presence indicators. Built with WebSocket technology for instant communication.",
      technologies: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Redis", "JWT", "WebRTC"],
      icon: Users
    },
    {
      title: "Payment Processing System",
      description: "Secure payment processing system with multiple payment gateways, transaction management, and fraud detection. Includes subscription billing and recurring payments.",
      technologies: ["Node.js", "Stripe", "PayPal", "MongoDB", "Redis", "JWT", "Webhooks"],
      icon: ShoppingCart
    },
    {
      title: "Content Management System",
      description: "Full-featured CMS with content creation, editing, publishing, and version control. Includes media management, SEO optimization, and multi-language support.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS S3", "Elasticsearch", "Redis", "Docker"],
      icon: Monitor
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated font-poppins">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Showcasing innovative solutions and technical expertise
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card-enhanced group hover:shadow-2xl transition-all duration-500 hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white font-poppins">{project.title}</h3>
          </div>

                <p className="text-white/80 mb-4 leading-relaxed font-inter">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-inter">
                            {tech}
                    </span>
                        ))}
                      </div>
                    </div>
                  </div>
            ))}
        </div>
      </div>
    </section>
  )
}
