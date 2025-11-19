import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 pt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm">
            <span className="mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              experiences
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            I'm a Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Background Gradient Blob */}
        <div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute top-1/2 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
      </section>

      {/* About Section */}
      <Section id="about" className="bg-white/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-gray-400">
              <p>
                I started my coding journey back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, and a huge corporation.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS"].map((tech) => (
                  <span key={tech} className="rounded-md bg-white/10 px-3 py-2 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store built with Next.js, Stripe, and Sanity CMS. Includes cart functionality, user auth, and order tracking."
              tags={["Next.js", "TypeScript", "Stripe", "Sanity"]}
              link="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task manager with real-time updates using Socket.io. Features drag-and-drop boards and team workspaces."
              tags={["React", "Node.js", "Socket.io", "MongoDB"]}
              link="https://github.com"
            />
            <ProjectCard
              title="AI Content Generator"
              description="SaaS application that uses OpenAI API to generate blog posts and social media content. Built with tRPC and Prisma."
              tags={["Next.js", "tRPC", "OpenAI", "PostgreSQL"]}
              link="https://github.com"
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <p className="mb-12 text-lg text-gray-400">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="mailto:hello@example.com"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
