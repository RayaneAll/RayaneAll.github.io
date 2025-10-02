"use client"

import { useState } from "react"
import { Terminal, User, Briefcase, Mail, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { id: "accueil", label: "accueil", icon: Terminal, command: "cd ~" },
  { id: "about", label: "à propos", icon: User, command: "cat about.txt" },
  { id: "projets", label: "projets", icon: Briefcase, command: "ls projets/" },
  { id: "contact", label: "contact", icon: Mail, command: "mail contact" },
]

export function TerminalNav() {
  const [activeCommand, setActiveCommand] = useState("cd ~")

  const scrollToSection = (id: string, command: string) => {
    setActiveCommand(command)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const downloadCV = () => {
    // Simulate CV download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to add your actual CV
    link.download = "CV_Portfolio.pdf"
    link.click()
  }

  return (
    <nav className="border-b border-border bg-secondary/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-primary text-sm mr-2">$</span>
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id, item.command)}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors font-mono text-xs md:text-sm"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={downloadCV}
            className="text-accent hover:text-accent hover:bg-accent/10 transition-colors font-mono text-xs md:text-sm ml-auto"
          >
            <FileDown className="w-4 h-4 mr-2" />
            télécharger CV
          </Button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground font-mono">
          <span className="text-primary">→</span> {activeCommand}
        </div>
      </div>
    </nav>
  )
}
