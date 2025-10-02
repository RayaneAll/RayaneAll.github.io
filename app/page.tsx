import { TerminalHeader } from "@/components/terminal-header"
import { TerminalNav } from "@/components/terminal-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { TerminalFooter } from "@/components/terminal-footer"
import { InteractiveTerminal } from "@/components/interactive-terminal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Terminal scanline effect */}
      <div className="terminal-scanline fixed inset-0 pointer-events-none z-50" />

      {/* Main terminal window */}
      <div className="terminal-window min-h-screen">
        <TerminalHeader />
        <TerminalNav />

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <TerminalFooter />
      </div>

      <InteractiveTerminal />
    </div>
  )
}
