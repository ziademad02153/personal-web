"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Open email client with pre-filled message
        if (data.mailtoLink) {
          window.location.href = data.mailtoLink
        }

        toast({
          title: "Email Client Opened!",
          description: "Your email client should open with the pre-filled message. Please send it from there.",
        })

        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Failed to process your message. Please try using the direct email link below.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ziademadbts@gmail.com",
      href: "mailto:ziademadbts@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+201140462022",
      href: "tel:+201140462022",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+201140462022",
      href: "https://wa.me/201140462022",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Egypt",
      href: null,
    },
    // GitHub row
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/ziademad02153/ziademad02153",
      href: "https://github.com/ziademad02153/ziademad02153",
    },
    // LinkedIn row
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ziad-emad-allam-02153z",
      href: "https://www.linkedin.com/in/ziad-emad-allam-02153z",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated font-mono">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="animate-slide-in-left glass-card-enhanced hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <MessageCircle className="h-6 w-6" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always interested in new opportunities, challenging projects, and meaningful collaborations.
                    Whether you have a project in mind, need technical consultation, or just want to say hello, I'd love
                    to hear from you.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => {
                      const isSocial = info.label === "GitHub" || info.label === "LinkedIn";
                      return (
                        <div key={index} className={
                          "flex items-center gap-4 p-5 rounded-xl shadow-md bg-white/5 border border-gray-800 hover:bg-primary/10 transition-all duration-200 " +
                          (isSocial ? "hover:bg-gray-900 hover:text-white" : "hover:bg-white/20")
                        }>
                          <div className={
                            "flex items-center justify-center w-12 h-12 rounded-full " +
                            (isSocial ? "bg-gray-900 text-white" : "bg-primary/10 text-primary")
                          }>
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg mb-1">{info.label}</div>
                            {info.href ? (
                              <a
                                href={info.href}
                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={
                                  "block text-base break-all font-mono underline hover:text-primary transition-colors duration-200 " +
                                  (isSocial ? "text-white" : "text-primary")
                                }
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="block text-base break-all font-mono text-muted-foreground">{info.value}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="animate-slide-in-left delay-200 glass-card-enhanced hover-lift">
                <CardHeader>
                  <CardTitle className="text-primary">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full justify-start glass-card-enhanced bg-transparent hover-lift" variant="outline" asChild>
                      <a href="mailto:ziademadbts@gmail.com?subject=Project Inquiry">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email Directly
                      </a>
                    </Button>
                    <Button className="w-full justify-start glass-card-enhanced bg-transparent hover-lift" variant="outline" asChild>
                      <a href="https://wa.me/201140462022" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message on WhatsApp
                      </a>
                    </Button>
                    <Button className="w-full justify-start glass-card-enhanced bg-transparent hover-lift" variant="outline" asChild>
                      <a
                        href="https://www.linkedin.com/in/ziad-emad-allam-02153z"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button className="w-full justify-start glass-card-enhanced bg-transparent hover-lift" variant="outline" asChild>
                      <a href="https://github.com/ziademad02153/ziademad02153" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="animate-fade-in-up glass-card-enhanced hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Send className="h-6 w-6" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="glass-card-enhanced hover-lift"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="glass-card-enhanced hover-lift"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="glass-card-enhanced hover-lift"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="glass-card-enhanced hover-lift"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full glass-card-enhanced hover-lift" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Preparing Email...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    The form will open your email client with a pre-filled message. For instant messaging, use WhatsApp
                    or direct email links above.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
