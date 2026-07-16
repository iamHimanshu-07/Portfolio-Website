import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter, Facebook, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              <Button size="lg" variant="secondary" asChild>
                <Link href="/Himanshu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
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

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main image container */}
              <div className="relative">
                {/* Solid cyan border */}
                <div className="absolute -inset-3 bg-primary rounded-2xl" />
                
                {/* Image with rounded corners */}
                <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-background">
                  <Image
                    src="/images/himanshu-profile.jpg"
                    alt="Himanshu Singh Yadav - AI/ML Engineer"
                    width={380}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient for code section */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                  
                  {/* Floating code snippet */}
                  <div className="absolute bottom-6 left-4 right-4 bg-background/95 backdrop-blur-md border border-primary/30 rounded-lg p-4 shadow-xl">
                    <pre className="text-xs text-muted-foreground font-mono overflow-hidden leading-relaxed">
                      <code className="text-primary">const</code>
                      <code className="text-foreground">{` engineer = {`}</code>
                      <br />
                      <code className="text-foreground">{`  name: `}</code>
                      <code className="text-primary">{`"Himanshu Singh Yadav"`}</code>
                      <br />
                      <code className="text-foreground">{`};`}</code>
                    </pre>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-3 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
