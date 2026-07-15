import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "VoiceFlow - Speech Recognition App",
    description:
      "A real-time speech-to-text web app using the Web Speech API with a modern Next.js/React/TypeScript frontend supporting 8 languages (English, Hindi, Spanish, French, German, Japanese, Chinese & more) and accents. Features continuous listening with live recording indicators, text export/clipboard copy, and responsive dark/light theme toggle.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Speech API"],
    github: "https://github.com/iamHimanshu-07/VoiceFlow",
    live: "https://speech-recognition-web-rho.vercel.app",
    image: "/images/speech-recognition.jpg",
  },
  {
    title: "MindPulse.AI - Mental Health Analyzer",
    description:
      "An end-to-end NLP project for multi-label mental-health emotion detection from free-form text. Uses TF-IDF + OneVsRest RandomForest on the DepressionEmo dataset, serving through an interactive Flask dashboard with per-session mood trends and NLTK preprocessing pipeline achieving 82% validation accuracy.",
    tags: ["Python", "NLP", "Scikit-Learn", "Flask", "NLTK", "Matplotlib"],
    github: "https://github.com/iamHimanshu-07/MindPulse.AI",
    live: "#",
    image: "/images/mental-health.jpg",
  },
  {
    title: "Cardio.AI - Heart Disease Prediction",
    description:
      "A full-stack clinical web app using Flask & SQLite to predict heart disease risk (Low/Moderate/High) from 11 medical parameters. Integrated with Google Gemini AI chatbot for personalized health advice, automated PDF report generation via ReportLab, and complete doctor login & patient CRUD dashboard.",
    tags: ["Python", "Flask", "Scikit-Learn", "SQLite", "Gemini API", "ReportLab"],
    github: "https://github.com/iamHimanshu-07/Cardio.AI",
    live: "https://cardio-ai-j1pa.onrender.com",
    image: "/images/heart-disease.jpg",
  },
  {
    title: "TransitOps - Smart Transport Operations Platform",
    description:
      "An intelligent transport management platform optimizing fleet operations, route planning, and real-time vehicle tracking. Built with advanced analytics and AI-driven insights for efficient transportation logistics and data-driven decision making.",
    tags: ["React", "Node.js", "AI/ML", "Fleet Management", "Real-time Tracking"],
    github: "https://github.com/iamHimanshu-07/TransitOps-Smart-Transport-Operations-Platform",
    live: "#",
    image: "/images/transitops.png",
  },
  {
    title: "CryptoCast - Bitcoin Price Predictor",
    description:
      "A Streamlit dashboard that fetches live Bitcoin data from the CoinGecko API, computes technical indicators (moving averages, RSI, volatility), and uses a Random Forest model to predict next-day price direction and an approximate next-day price.",
    tags: ["Python", "Streamlit", "Random Forest", "CoinGecko API", "Pandas"],
    github: "https://github.com/iamHimanshu-07/CryptoCast",
    live: "#",
    image: "/images/cryptocast.png",
  },
  {
    title: "Movie Recommendation System",
    description:
      "A recommendation engine built using Item-Based Collaborative Filtering and Cosine Similarity on the MovieLens dataset (9,742 movies, 100,836 ratings, 610 users) to suggest movies based on user rating patterns.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Collaborative Filtering"],
    github: "https://github.com/iamHimanshu-07/Movie-Recommendation-System",
    live: "#",
    image: "/images/movie-recommendation.jpg",
  },
  {
    title: "SMS Spam Classifier",
    description:
      "A Machine Learning project that classifies SMS messages as Spam or Ham using NLP with TF-IDF Vectorization and Multinomial Naive Bayes, achieving 96.7% accuracy (100% spam precision, 75% recall, 0.97 F1-score) on the UCI SMS Spam Collection dataset (~5,570 messages).",
    tags: ["Python", "NLP", "TF-IDF", "Naive Bayes", "Scikit-Learn"],
    github: "https://github.com/iamHimanshu-07/Spam-SMS-Classifier",
    live: "#",
    image: "/images/spam-sms.png",
  },
  {
    title: "SmartBin - AIoT Smart Dustbin",
    description:
      "A touch-free intelligent waste management system built with Arduino Uno, an HC-SR04 ultrasonic sensor, and a servo motor. Automatically opens the lid when a person approaches, improving hygiene for smart cities, hospitals, and public spaces.",
    tags: ["C++", "Arduino", "IoT", "Ultrasonic Sensor", "Servo Motor"],
    github: "https://github.com/iamHimanshu-07/SmartBin",
    live: "#",
    image: "/images/smartbin.png",
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
                  {project.live !== "#" && (
                    <Button size="sm" asChild>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
