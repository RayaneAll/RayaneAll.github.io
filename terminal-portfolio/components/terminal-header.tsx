"use client"

import { useState, useEffect } from "react"

export function TerminalHeader() {
  const [time, setTime] = useState(new Date())
  const [username, setUsername] = useState("portfolio")

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-[oklch(0.70_0.15_85)]" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{username}@terminal:~$</span>
          </div>
          <div className="text-sm text-muted-foreground font-mono">{time.toLocaleTimeString("fr-FR")}</div>
        </div>
      </div>
    </header>
  )
}
