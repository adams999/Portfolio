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
            Adams J. Contreras <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Full Stack Developer
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Full Stack Developer with over 7 years of experience building scalable, high-performance web and mobile solutions.
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
                I'm <span className="text-white font-semibold">Adams J. Contreras Ramírez</span>, a Venezuelan developer with over 7 years of experience in web technologies.
              </p>
              <p>
                My expertise spans both <span className="text-white">backend</span> and <span className="text-white">frontend</span> development, as well as mobile applications. I've worked as a <span className="text-white font-semibold">Team Lead</span> managing multicultural teams, always focused on results, delivery timelines, and code optimization.
              </p>
              <p>
                I'm passionate about creating efficient and scalable technology solutions, prioritizing best practices and the quality of the final product.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/adams999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adamsjcontreras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
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
              <div className="pt-4 space-y-2 text-sm text-gray-400">
                <p><span className="text-white font-semibold">Nationality:</span> Venezuelan</p>
                <p><span className="text-white font-semibold">Experience:</span> +7 years</p>
                <p><span className="text-white font-semibold">Roles:</span> Full Stack Developer, Team Lead</p>
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
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Let's Work Together</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm currently open to new opportunities and exciting projects. Let's connect and build something amazing!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Key Highlights */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><span className="text-white font-semibold">7+ Years</span> of proven experience in full-stack development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><span className="text-white font-semibold">Team Leadership</span> with multicultural teams across time zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><span className="text-white font-semibold">Results-driven</span> approach with focus on delivery and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><span className="text-white font-semibold">Full-stack expertise</span> in modern web and mobile technologies</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <Link href="mailto:adamspurry@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      adamspurry@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <Link href="https://github.com/adams999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      github.com/adams999
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <Link href="https://www.linkedin.com/in/adamsjcontreras" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      linkedin.com/in/adamsjcontreras
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:adamspurry@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              Send me an email
            </Link>
            <Link
              href="https://www.linkedin.com/in/adamsjcontreras"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
