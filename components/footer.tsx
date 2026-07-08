import Link from "next/link"
import { Github, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-primary">Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Building intelligent solutions with AI & ML.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/iamHimanshu-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/himanshu-singh-yadav-57144a2b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/iamhimanshu2312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.facebook.com/share/1CN913PNi9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Himanshu Singh Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
