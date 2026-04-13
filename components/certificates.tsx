import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    category: "Cloud Computing",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "IAM"],
  },
  {
    title: "Prompt Engineering for Claude",
    issuer: "Anthropic",
    date: "2025",
    category: "Generative AI",
    skills: ["Prompt Engineering", "LLMs", "Claude AI", "AI Applications"],
  },
  {
    title: "Build AI Agents & MCP Servers",
    issuer: "Anthropic",
    date: "2025",
    category: "AI Development",
    skills: ["AI Agents", "MCP Servers", "LLMs", "Automation"],
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
    date: "2025",
    category: "Machine Learning",
    skills: ["ML Fundamentals", "Supervised Learning", "Model Training"],
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "2025",
    category: "Machine Learning",
    skills: ["Feature Engineering", "Cross-Validation", "XGBoost"],
  },
  {
    title: "Power BI Job Simulation",
    issuer: "PwC Switzerland (via Forage)",
    date: "2025",
    category: "Data Analytics",
    skills: ["Power BI", "Data Visualization", "Business Intelligence"],
  },
  {
    title: "Complete Python Developer in 2025",
    issuer: "Udemy (Andrei Neagoie)",
    date: "2025",
    category: "Programming",
    skills: ["Python", "OOP", "Web Scraping", "Automation"],
  },
  {
    title: "Data Science Full Course",
    issuer: "Udemy",
    date: "2025",
    category: "Data Science",
    skills: ["Data Science", "Statistics", "Python", "ML"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coursera (Board Infinity)",
    date: "2024",
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
  },
  {
    title: "Android Development Internship",
    issuer: "Codsoft",
    date: "2024",
    category: "Mobile Development",
    skills: ["Android", "Java", "XML", "Mobile UI"],
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM (via Coursera)",
    date: "2024",
    category: "Cloud Computing",
    skills: ["Cloud Basics", "IBM Cloud", "DevOps", "Microservices"],
  },
  {
    title: "Database Management System Basics",
    issuer: "Infosys Springboard",
    date: "2024",
    category: "Database",
    skills: ["SQL", "DBMS", "Normalization", "ER Diagrams"],
  },
  {
    title: "Career Edge - TCS iON Digital Learning",
    issuer: "TCS iON",
    date: "2024",
    category: "Professional Development",
    skills: ["Communication", "IT Fundamentals", "Career Skills"],
  },
]

const categoryColors: Record<string, string> = {
  "Cloud Computing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Generative AI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "AI Development": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Machine Learning": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Data Analytics": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Programming": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Data Science": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Web Development": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Mobile Development": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Database": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Professional Development": "bg-rose-500/10 text-rose-400 border-rose-500/20",
}

export function Certificates() {
  return (
    <section id="certificates" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            13+ industry-relevant certifications from leading platforms including AWS, Anthropic, Kaggle, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${categoryColors[cert.category] || "bg-secondary text-secondary-foreground"}`}
                >
                  {cert.category}
                </Badge>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Building2 className="h-3.5 w-3.5" />
                <span className="line-clamp-1">{cert.issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-3.5 w-3.5" />
                <span>{cert.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 text-muted-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
                {cert.skills.length > 3 && (
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 text-muted-foreground"
                  >
                    +{cert.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
