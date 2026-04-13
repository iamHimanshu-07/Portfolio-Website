import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter, Facebook, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">
                AI/ML Engineer & Full-Stack Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Hi, I&apos;m <span className="text-primary">Himanshu Singh Yadav</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                A passionate AI/ML enthusiast and full-stack developer from Surat, Gujarat. 
                I specialize in building intelligent applications using Machine Learning, Deep Learning, 
                and modern web technologies. Currently pursuing B.Tech in AI & ML.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/Himanshu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/Himanshu_Resume.pdf" download="Himanshu_Singh_Yadav_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link
                href="https://github.com/iamHimanshu-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/himanshu-singh-yadav-57144a2b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/iamhimanshu2312"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/1CN913PNi9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <pre className="text-sm text-muted-foreground overflow-x-auto">
                  <code>{`const developer = {
  name: "Himanshu Singh Yadav",
  role: "AI/ML Engineer",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Flask",
    "NLP"
  ],
  passions: [
    "Artificial Intelligence",
    "Problem Solving",
    "Innovation"
  ]
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
