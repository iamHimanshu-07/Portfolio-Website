const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "NLP", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "Pandas & NumPy", level: 90 },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS Cloud", level: 75 },
      { name: "Git & GitHub", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Gen AI / LLMs", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of the technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
