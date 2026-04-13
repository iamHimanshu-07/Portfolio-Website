import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Oct 2025 - Nov 2025",
    title: "Machine Learning Intern",
    company: "Skillbit Technologies",
    description:
      "Executed end-to-end ML pipelines — data collection, preprocessing, feature engineering, model training, and evaluation on real-world industry datasets. Built a Movie Recommendation System and Spam SMS Classifier.",
    skills: ["Python", "Machine Learning", "NLP", "Scikit-Learn"],
  },
  {
    period: "2023 - Present",
    title: "B.Tech - AI & Machine Learning",
    company: "P P Savani University, Kosamba, Gujarat",
    description:
      "Currently pursuing B.Tech in Artificial Intelligence & Machine Learning with CGPA 7.5/10.0. Coursework includes AI, ML, DSA, DBMS, Cloud Computing, and AIoT.",
    skills: ["Python", "AI/ML", "DSA", "Cloud Computing"],
  },
  {
    period: "2025",
    title: "SSIP Participant",
    company: "Student Startup & Innovation Policy",
    description:
      "Selected under SSIP at P P Savani University for developing an AI-powered Crop Yield Prediction System using ML on soil, weather & fertilizer data to support data-driven agricultural decisions.",
    skills: ["Machine Learning", "Data Science", "Agriculture Tech"],
  },
  {
    period: "2025",
    title: "Certifications & Achievements",
    company: "Multiple Platforms",
    description:
      "Completed 13+ industry-relevant certifications across AI/ML, Cloud Computing, Full-Stack Development, and Data Analytics from AWS, Anthropic, Udemy, Coursera, and more.",
    skills: ["AWS Cloud", "Gen AI", "Power BI", "Android Development"],
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
            My journey in AI/ML and software development, from student to professional.
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
