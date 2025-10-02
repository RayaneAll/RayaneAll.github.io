import { Github, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes",
    image: "/ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    date: "2024",
    github: "#",
    demo: "#",
    competences: ["Front-end", "Back-end", "Base de données"],
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel avec graphiques dynamiques",
    image: "/analytics-dashboard.png",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    date: "2024",
    github: "#",
    demo: "#",
    competences: ["Front-end", "Visualisation de données"],
  },
  {
    title: "API REST Microservices",
    description: "Architecture microservices avec authentification JWT et documentation Swagger",
    image: "/api-microservices-architecture.jpg",
    technologies: ["Node.js", "Express", "Docker", "Redis"],
    date: "2023",
    github: "#",
    demo: "#",
    competences: ["Back-end", "DevOps", "Sécurité"],
  },
  {
    title: "Application Mobile",
    description: "Application mobile cross-platform avec synchronisation cloud et mode hors-ligne",
    image: "/mobile-app-interface.png",
    technologies: ["React Native", "Firebase", "Redux"],
    date: "2023",
    github: "#",
    demo: "#",
    competences: ["Mobile", "Front-end", "Cloud"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projets" className="py-12 md:py-20 border-t border-border">
      <div className="space-y-8">
        {/* Section header */}
        <div className="flex items-center gap-2 text-primary text-sm mb-6">
          <span>$</span>
          <span className="text-foreground">ls -la projets/</span>
        </div>

        <div className="border-l-2 border-accent pl-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary terminal-glow mb-4">Mes Projets</h2>
          <p className="text-foreground leading-relaxed">
            <span className="text-accent">&gt;</span> Sélection de mes réalisations les plus significatives, démontrant
            mes compétences techniques et ma capacité à mener des projets de bout en bout.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-border bg-card/30 rounded overflow-hidden hover:border-primary transition-all group"
            >
              {/* Project image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary border border-primary/30 px-2 py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Compétences */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-3 h-3 text-accent" />
                    <span className="text-xs text-muted-foreground">Compétences:</span>
                    {project.competences.map((comp) => (
                      <span key={comp} className="text-xs text-accent">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center pt-6">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Github className="w-4 h-4 mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
