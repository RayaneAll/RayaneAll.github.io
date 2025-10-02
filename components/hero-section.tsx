"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Développeur Full-Stack | Créateur d'expériences numériques"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="accueil" className="py-12 md:py-20">
      <div className="space-y-8">
        {/* Terminal prompt */}
        <div className="flex items-center gap-2 text-primary text-sm">
          <Terminal className="w-4 h-4" />
          <span>portfolio@terminal:~$</span>
          <span className="text-foreground">whoami</span>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-primary bg-secondary overflow-hidden terminal-glow">
              <img
                src="/professional-developer-portrait.png"
                alt="Photo professionnelle"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <h1 className="text-3xl md:text-5xl font-bold text-primary terminal-glow mb-2">Votre Nom</h1>
              <p className="text-lg md:text-xl text-foreground font-mono">
                {displayedText}
                <span className="cursor-blink">▊</span>
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              <span className="text-accent">&gt;&gt;</span> Passionné par le développement web et la création
              d'interfaces utilisateur innovantes. Spécialisé dans les technologies modernes pour construire des
              expériences numériques performantes et accessibles.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { label: "Projets", value: "15+" },
              { label: "Compétences", value: "20+" },
              { label: "Expérience", value: "3 ans" },
              { label: "Certifications", value: "5" },
            ].map((stat) => (
              <div key={stat.label} className="border border-border bg-card/30 p-4 rounded">
                <div className="text-2xl md:text-3xl font-bold text-primary terminal-glow">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
