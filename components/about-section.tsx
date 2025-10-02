import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Code2,
      title: "Code de qualité",
      description: "Écriture de code propre, maintenable et performant",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploration constante de nouvelles technologies",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation et rapidité au cœur du développement",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe et communication efficace",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 border-t border-border">
      <div className="space-y-8">
        {/* Section header */}
        <div className="flex items-center gap-2 text-primary text-sm mb-6">
          <span>$</span>
          <span className="text-foreground">cat about.txt</span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary terminal-glow mb-4">À propos de moi</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                <span className="text-accent">&gt;</span> Développeur passionné avec une solide formation en
                développement web full-stack. Mon parcours m'a permis d'acquérir une expertise dans la création
                d'applications web modernes, de la conception à la mise en production.
              </p>
              <p>
                <span className="text-accent">&gt;</span> Je m'efforce constamment d'améliorer mes compétences et de
                rester à jour avec les dernières technologies du secteur. Mon approche combine créativité technique et
                rigueur professionnelle pour livrer des solutions qui dépassent les attentes.
              </p>
              <p>
                <span className="text-accent">&gt;</span> Au-delà du code, je suis convaincu que la réussite d'un projet
                repose sur une communication claire, une compréhension approfondie des besoins utilisateurs et une
                collaboration efficace.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-border bg-card/30 p-6 rounded hover:border-primary transition-colors group"
              >
                <value.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
