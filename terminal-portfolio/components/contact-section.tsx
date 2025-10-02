"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-12 md:py-20 border-t border-border">
      <div className="space-y-8">
        {/* Section header */}
        <div className="flex items-center gap-2 text-primary text-sm mb-6">
          <span>$</span>
          <span className="text-foreground">mail contact</span>
        </div>

        <div className="border-l-2 border-primary pl-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary terminal-glow mb-4">Contact</h2>
          <p className="text-foreground leading-relaxed">
            <span className="text-accent">&gt;</span> Vous avez un projet en tête ? Une question ? N'hésitez pas à me
            contacter, je serais ravi d'échanger avec vous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6 h-full">
            <div className="border border-border bg-card/30 p-6 rounded space-y-4 flex-1">
              <h3 className="text-lg font-bold text-foreground mb-4">Informations de contact</h3>

              <div className="space-y-3">
                <a
                  href="mailto:votre.email@example.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:text-primary" />
                  <span className="font-mono text-sm">votre.email@example.com</span>
                </a>

                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 text-accent group-hover:text-primary" />
                  <span className="font-mono text-sm">+33 1 23 45 67 89</span>
                </a>

                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="border border-border bg-card/30 p-6 rounded">
              <h3 className="text-lg font-bold text-foreground mb-4">Réseaux sociaux</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="mailto:votre.email@example.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="border border-border bg-card/30 p-6 rounded">
            <h3 className="text-lg font-bold text-foreground mb-4">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border text-foreground resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
