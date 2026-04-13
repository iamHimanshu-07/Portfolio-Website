import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content creation platform using modern LLMs for generating marketing copy and blog posts.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing business metrics with customizable widgets and data export features.",
    tags: ["Vue.js", "D3.js", "GraphQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work showcasing my skills in building modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
