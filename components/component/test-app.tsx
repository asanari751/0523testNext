/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JoRBL8u9PBb
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function testApp() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">유민협의 포트폴리오</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Jane Doe</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Game Engineer with a passion for creating immersive and engaging gaming experiences.
                  </p>
                </div>
              </div>
              <img
                alt="Jane Doe"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a selection of my recent game development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                <img
                  alt="Project 1"
                  className="aspect-video w-full object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Platformer Game</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A classic 2D platformer game with challenging levels and engaging mechanics.
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                <img
                  alt="Project 2"
                  className="aspect-video w-full object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Multiplayer Shooter</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A fast-paced, online multiplayer shooter with unique weapons and abilities.
                  </p>
                </div>
              </div>
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                <img
                  alt="Project 3"
                  className="aspect-video w-full object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Puzzle Adventure</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A captivating puzzle game with a rich, narrative-driven adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the diverse range of skills I bring to game development.
                </p>
              </div>
              <div className="grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                  <NetworkIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Unity</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                  <GamepadIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Unreal Engine</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                  <CylinderIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">C#</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                  <CylinderIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">C++</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                  <ImageIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ---------------
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input className="max-w-lg" placeholder="Name" type="text" />
                  <Input className="max-w-lg" placeholder="Email" type="email" />
                  <Textarea className="max-w-lg" placeholder="Message" />
                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CylinderIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  )
}


function GamepadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function NetworkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}
