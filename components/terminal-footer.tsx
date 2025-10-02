import { Terminal } from "lucide-react"

export function TerminalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono">portfolio@terminal:~$ exit</span>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            <span>© {currentYear} Votre Nom</span>
          </div>

          <div className="text-xs text-muted-foreground font-mono">v1.0.0</div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ce portfolio a été développé dans le cadre de ma formation et démontre l'ensemble des compétences acquises
            pour l'obtention de mon titre RNCP. Toutes les compétences listées sont validées par des projets concrets.
          </p>
        </div>
      </div>
    </footer>
  )
}
