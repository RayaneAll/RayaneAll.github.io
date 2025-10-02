"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Terminal, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const commands = {
  help: "Commandes disponibles:\n  cd accueil - Aller à l'accueil\n  cd about - Aller à la section à propos\n  cd projets - Aller aux projets\n  cd contact - Aller au contact\n  clear - Effacer le terminal\n  help - Afficher cette aide",
  clear: "CLEAR",
  "cd accueil": "accueil",
  "cd ~": "accueil",
  "cd about": "about",
  "cd projets": "projets",
  "cd projects": "projets",
  "cd contact": "contact",
  ls: "accueil/  about/  projets/  contact/",
  pwd: "~/portfolio",
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    {
      type: "output",
      text: "Bienvenue dans le terminal interactif! Tapez 'help' pour voir les commandes disponibles.",
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setHistory((prev) => [...prev, { type: "input", text: `$ ${cmd}` }])

    if (trimmedCmd === "") {
      return
    }

    if (trimmedCmd === "clear") {
      setHistory([])
      return
    }

    const commandKey = Object.keys(commands).find((key) => key === trimmedCmd)

    if (commandKey) {
      const result = commands[commandKey as keyof typeof commands]

      if (result === "CLEAR") {
        setHistory([])
      } else if (["accueil", "about", "projets", "contact"].includes(result)) {
        const element = document.getElementById(result)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
          setHistory((prev) => [...prev, { type: "output", text: `Navigation vers ${result}...` }])
          // Terminal stays open - removed setTimeout that closed it
        }
      } else {
        setHistory((prev) => [...prev, { type: "output", text: result }])
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          text: `Commande non reconnue: ${trimmedCmd}. Tapez 'help' pour voir les commandes disponibles.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  return (
    <>
      {/* Floating Terminal Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 transition-all hover:scale-110"
        size="icon"
      >
        <Terminal className="w-6 h-6" />
      </Button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-2xl h-96 bg-background border-2 border-primary rounded-lg shadow-2xl shadow-primary/30 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-primary bg-card/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-[oklch(0.70_0.15_85)]" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">terminal@portfolio</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Terminal Content */}
          <div ref={historyRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2 bg-background/95">
            {history.map((item, index) => (
              <div
                key={index}
                className={item.type === "input" ? "text-primary" : "text-muted-foreground whitespace-pre-wrap"}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="border-t border-primary p-4 bg-card/50">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                placeholder="Tapez une commande..."
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}
