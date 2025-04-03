import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SketchBorder from "@/components/sketch-border"
import SketchDivider from "@/components/sketch-divider"
import SketchText from "@/components/sketch-text"
import SketchyButton from "@/components/sketchy-button"
import SketchyInput from "@/components/sketchy-input"
import SketchyTextarea from "@/components/sketchy-textarea"

// Remove these imports if you're not using them
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Add this import
import { projectData } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-black/10 py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <SketchText as="span">MR.JUI</SketchText>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-black/10">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-black/10 py-4">
                  <SketchText as="span" className="text-xl font-bold">
                    MENU
                  </SketchText>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  <Link href="#about" className="hover:underline">
                    <SketchText as="span" className="text-xl">
                      ABOUT
                    </SketchText>
                  </Link>
                  <Link href="#skills" className="hover:underline">
                    <SketchText as="span" className="text-xl">
                      SKILLS
                    </SketchText>
                  </Link>
                  <Link href="#work" className="hover:underline">
                    <SketchText as="span" className="text-xl">
                      WORK
                    </SketchText>
                  </Link>
                  <Link href="#contact" className="hover:underline">
                    <SketchText as="span" className="text-xl">
                      CONTACT
                    </SketchText>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href="#about" className="text-sm hover:underline">
              <SketchText as="span" className="text-sm">
                ABOUT
              </SketchText>
            </Link>
            <Link href="#skills" className="text-sm hover:underline">
              <SketchText as="span" className="text-sm">
                SKILLS
              </SketchText>
            </Link>
            <Link href="#work" className="text-sm hover:underline">
              <SketchText as="span" className="text-sm">
                WORK
              </SketchText>
            </Link>
            <Link href="#contact" className="text-sm hover:underline">
              <SketchText as="span" className="text-sm">
                CONTACT
              </SketchText>
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="container py-20 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center">
              <SketchText as="h1" className="text-4xl font-bold leading-tight md:text-6xl">
                MOBILE APP
                <br />
                DEVELOPER &
                <br />
                PROGRAMMER
              </SketchText>
              <p className="mt-6 text-lg text-black/70">
                I create innovative mobile applications and web solutions that combine functionality 
                with exceptional user experience.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="#work">
                  <SketchyButton className="bg-white text-black hover:bg-black hover:text-white" sketchiness="medium">
                    View Work
                  </SketchyButton>
                </Link>
                <Link href="#contact">
                  <SketchyButton
                    variant="outline"
                    className="bg-transparent text-black hover:bg-black hover:text-white"
                    sketchiness="medium"
                  >
                    Contact Me
                  </SketchyButton>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <SketchBorder className="absolute inset-0" />
              <Image
                src="/pro.jpg?height=600&width=600"
                alt="Profile"
                className="absolute inset-0 h-full w-full object-cover p-3"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </section>

        <SketchDivider />

        <section id="about" className="container py-20">
          <SketchText as="h2" className="text-3xl font-bold md:text-4xl">
            ABOUT ME
          </SketchText>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-lg text-black/70">
                I'm Mr.Jui, a third-year Information Technology student at Rajamangala University of Technology Thanyaburi, 
                Faculty of Business Administration. I'm passionate about technology and software development, 
                constantly exploring new tools and frameworks to build innovative solutions.
              </p>
              <p className="mt-4 text-lg text-black/70">
                My academic journey has equipped me with both technical skills and business knowledge, 
                allowing me to understand not just how to code, but also how technology can solve real business challenges. 
                I'm particularly interested in web development and mobile applications.
              </p>
            </div>
            <div className="relative">
              <SketchBorder className="absolute inset-0" />
              <div className="p-6">
                <SketchText as="h3" className="text-xl font-bold">
                  EXPERIENCE
                </SketchText>
                <ul className="mt-4 space-y-4">
                  <li>
                    <div className="font-medium">Mobile App Developer - VitaWell</div>
                    <div className="text-sm text-black/70">2025 - Present</div>
                  </li>
                  <li>
                    <div className="font-medium">Web Developer - Buddy Go Platform</div>
                    <div className="text-sm text-black/70">2025</div>
                  </li>
                  <li>
                    <div className="font-medium">App Developer - PathumJourney</div>
                    <div className="text-sm text-black/70">2024</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SketchDivider />

        <section id="skills" className="bg-black py-20 text-white">
          <div className="container">
            <SketchText as="h2" className="text-3xl font-bold md:text-4xl">
              SKILLS
            </SketchText>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="relative">
                <SketchBorder className="absolute inset-0 border-white" />
                <div className="p-6">
                  <SketchText as="h3" className="text-xl font-bold">
                    FRONTEND
                  </SketchText>
                  <ul className="mt-4 space-y-2 text-white/70">
                    <li>HTML/CSS/JavaScript</li>
                    <li>Flutter</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <SketchBorder className="absolute inset-0 border-white" />
                <div className="p-6">
                  <SketchText as="h3" className="text-xl font-bold">
                    BACKEND
                  </SketchText>
                  <ul className="mt-4 space-y-2 text-white/70">
                    <li>PHP</li>
                    <li>Firebase</li>
                    <li>Database Design</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <SketchBorder className="absolute inset-0 border-white" />
                <div className="p-6">
                  <SketchText as="h3" className="text-xl font-bold">
                    TOOLS
                  </SketchText>
                  <ul className="mt-4 space-y-2 text-white/70">
                    <li>phpMyAdmin</li>
                    <li>Git/GitHub</li>
                    <li>VS Code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="container py-20">
          <SketchText as="h2" className="text-3xl font-bold md:text-4xl">
            SELECTED WORK
          </SketchText>
          <ProjectCarousel />
        </section>

        <SketchDivider />

        <section id="contact" className="container py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SketchText as="h2" className="text-3xl font-bold md:text-4xl">
                GET IN TOUCH
              </SketchText>
              <p className="mt-6 text-lg text-black/70">
                Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
              </p>
              <div className="mt-8">
                <div className="font-medium">Email</div>
                <div className="text-black/70">siwatphenhpno@gmail.com</div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Based in</div>
                <div className="text-black/70">Thailand, Bangkok</div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="https://www.instagram.com/jui_onetwo/" target="_blank" rel="noopener noreferrer">
                  <SketchyButton
                    variant="outline"
                    className="bg-transparent text-black hover:bg-black hover:text-white"
                    sketchiness="medium"
                  >
                    Instagram
                  </SketchyButton>
                </Link>
                <Link href="https://github.com/Jui1KK" target="_blank" rel="noopener noreferrer">
                  <SketchyButton
                    variant="outline"
                    className="bg-transparent text-black hover:bg-black hover:text-white"
                    sketchiness="medium"
                  >
                    GitHub
                  </SketchyButton>
                </Link>
                <Link href="https://www.linkedin.com/in/siwat-phenphon-500a88299/" target="_blank" rel="noopener noreferrer">
                  <SketchyButton
                    variant="outline"
                    className="bg-transparent text-black hover:bg-black hover:text-white"
                    sketchiness="medium"
                  >
                    LinkedIn
                  </SketchyButton>
                </Link>
              </div>
            </div>
            <div className="relative">
              <SketchBorder className="absolute inset-0" />
              <form className="p-6">
                <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      <SketchText as="span">NAME</SketchText>
                    </label>
                    <SketchyInput id="name" type="text" className="mt-1 w-full" sketchiness="medium" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      <SketchText as="span">EMAIL</SketchText>
                    </label>
                    <SketchyInput id="email" type="email" className="mt-1 w-full" sketchiness="medium" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      <SketchText as="span">MESSAGE</SketchText>
                    </label>
                    <SketchyTextarea id="message" rows={4} className="mt-1 w-full" sketchiness="medium" />
                  </div>
                  <SketchyButton className="bg-white text-black hover:bg-black hover:text-white" sketchiness="medium">
                    Send Message
                  </SketchyButton>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/10 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <SketchText as="div" className="text-xl font-bold">
                MR.JUI
              </SketchText>
              <div className="mt-1 text-sm text-black/70">© 2024. All rights reserved.</div>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-black/70 hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-black/70 hover:text-black">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

