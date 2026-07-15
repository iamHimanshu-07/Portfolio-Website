import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  BarChart3,
  Cpu,
  Globe,
  Server,
  Terminal,
  Layers,
  Sparkles
} from "lucide-react"

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Machine Learning", icon: Cpu },
      { name: "Deep Learning", icon: Layers },
      { name: "Natural Language Processing (NLP)", icon: Sparkles },
      { name: "Scikit-Learn", icon: Code2 },
      { name: "Pandas & NumPy", icon: Database },
      { name: "TensorFlow / Keras", icon: Cpu },
      { name: "Data Preprocessing", icon: BarChart3 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React 19", icon: Code2 },
      { name: "Next.js 16", icon: Server },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "Flask", icon: Server },
      { name: "Node.js & Express.js", icon: Server },
      { name: "REST APIs & JWT", icon: Code2 },
      { name: "HTML5 & CSS3", icon: Code2 },
      { name: "JavaScript", icon: Terminal },
      { name: "SQL & SQLite", icon: Database },
      { name: "Responsive Design", icon: Globe },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS Cloud Services", icon: Cloud },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Jupyter Notebook", icon: Terminal },
      { name: "VS Code", icon: Code2 },
      { name: "Linux/Ubuntu", icon: Terminal },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Matplotlib & Seaborn", icon: BarChart3 },
      { name: "Data Visualization", icon: BarChart3 },
      { name: "Statistical Analysis", icon: Cpu },
      { name: "Gen AI / LLMs", icon: Sparkles },
      { name: "Claude AI / Anthropic", icon: Sparkles },
      { name: "Streamlit Dashboards", icon: BarChart3 },
    ],
  },
  {
    title: "APIs & Integration",
    icon: Code2,
    skills: [
      { name: "Web Speech API", icon: Code2 },
      { name: "CoinGecko API", icon: Code2 },
      { name: "Form Integration (Formspree)", icon: Server },
      { name: "Server Actions", icon: Server },
      { name: "API Development", icon: Code2 },
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to build intelligent applications and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <SkillIcon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
