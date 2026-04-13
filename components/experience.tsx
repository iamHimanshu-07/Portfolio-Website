import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 - Present",
    title: "Senior Software Engineer",
    company: "Tech Company",
    description:
      "Lead development of scalable web applications serving millions of users. Architected microservices infrastructure and mentored junior developers.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    period: "2021 - 2023",
    title: "Full-Stack Developer",
    company: "Startup Inc",
    description:
      "Built and maintained core product features from scratch. Implemented CI/CD pipelines and improved application performance by 40%.",
    skills: ["Next.js", "PostgreSQL", "Docker", "GraphQL"],
  },
  {
    period: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed responsive web applications for diverse clients. Collaborated with design teams to create pixel-perfect interfaces.",
    skills: ["React", "Vue.js", "Sass", "JavaScript"],
  },
  {
    period: "2017 - 2019",
    title: "Junior Developer",
    company: "Web Studio",
    description:
      "Started professional journey building websites and web applications. Gained strong foundation in HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Career Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey in software development, from junior developer to senior engineer.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-2">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
