export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ziad Emad Allam",
    "url": "https://ziad-emad-allam.vercel.app",
    "image": "https://ziad-emad-allam.vercel.app/images/ziad-profile.jpg",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer with expertise in modern web technologies, software testing, and AI integration",
    "knowsAbout": [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Next.js",
      "JavaScript",
      "Python",
      "Software Testing",
      "AI Integration",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Tanta University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "OpenQQuantify"
    },
    "sameAs": [
      "https://github.com/ziademad02153",
      "https://www.linkedin.com/in/ziad-emad-allam-02153z"
    ],
    "email": "ziademadbts@gmail.com",
    "nationality": {
      "@type": "Country",
      "name": "Egypt"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ziad Emad Allam Portfolio",
    "url": "https://ziad-emad-allam.vercel.app",
    "description": "Professional portfolio showcasing Full Stack development projects, skills, and experience",
    "author": {
      "@type": "Person",
      "name": "Ziad Emad Allam"
    },
    "inLanguage": "en-US"
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ziad Emad Allam - Full Stack Development Services",
    "description": "Full Stack Development, Software Testing, AI Integration, and Technical Consulting services",
    "provider": {
      "@type": "Person",
      "name": "Ziad Emad Allam"
    },
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Arabic"],
    "serviceType": [
      "Full Stack Development",
      "Software Testing & QA",
      "AI Integration",
      "Mobile App Development",
      "Technical Consulting"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}


