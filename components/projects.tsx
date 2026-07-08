import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Heart Disease Prediction System",
    description:
      "A full-stack clinical web app using Flask & SQLite to predict heart disease risk (Low/Moderate/High) from 11 medical parameters. Integrated Google Gemini AI chatbot and automated PDF report generation.",
    tags: ["Python", "Flask", "Scikit-Learn", "SQLite", "Gemini API", "ReportLab"],
    github: "https://github.com/iamHimanshu-07",
    live: "#",
    image: "/images/heart-disease.png",
  },
  {
    title: "AI-Powered Mental Health Analyzer",
    description:
      "An ML application that analyzes emotional patterns from text input to assess mental health indicators and detect stress, anxiety, and mood trends using NLP techniques.",
    tags: ["Python", "NLP", "Scikit-Learn", "NLTK", "Flask", "Matplotlib"],
    github: "https://github.com/iamHimanshu-07",
    live: "#",
    image: "/images/mental-health.png",
  },
  {
    title: "Speech Recognition Web App",
    description:
      "Real-time speech-to-text application supporting 8 languages with continuous listening, live audio visualization, transcript download, and dark/light theme toggle.",
    tags: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    github: "https://github.com/iamHimanshu-07",
    live: "#",
    image: "/images/speech-recognition.png",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Built using content-based & collaborative filtering with cosine similarity to suggest movies based on user preferences and viewing history.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/iamHimanshu-07",
    live: "#",
    image: "/images/movie-recommendation.png",
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
            A selection of my recent work showcasing my skills in building modern AI/ML applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
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
