import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { AboutSection } from "@/components/AboutSection";
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
      <AboutSection />

      {/* Skills Section */}
      <Section id="skills" className="bg-white/5">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center">Technical Skills</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies, mobile development, and cloud infrastructure
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux", "Zustand"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-blue-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", ".NET", "Express", "NestJS", "Python", "Django", "FastAPI", "PHP", "Laravel", "REST APIs", "GraphQL", "tRPC", "Microservices"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-green-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Ionic", "Gradle", "Flutter", "XCode", "iOS", "Android", "Mobile UI/UX", "App Store", "Play Store"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-purple-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "Prisma", "TypeORM", "SQL", "NoSQL"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-orange-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-white">DevOps & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Nginx", "Linux", "Git"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-cyan-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Agile/Scrum", "Jira", "Team Leadership", "Code Review", "Testing", "Jest", "Cypress", "Figma", "VS Code", "Postman"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 text-sm text-gray-300 hover:bg-yellow-500/20 transition-colors">
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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Enterprise-level applications and production-ready solutions showcasing full-stack expertise, scalable architecture, and industry best practices
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="SimuStream - Video Platform Backend"
              description="Production-grade video streaming platform with MongoDB, Express, Socket.io, Stripe payments, AWS S3 storage, player analytics, email notifications, referral system, and cron-based automation. Complete enterprise solution."
              tags={["Node.js", "MongoDB", "Stripe", "AWS S3", "Socket.io", "Redis"]}
              link="https://github.com/adams999/Backend-with-shopify-and-mongo"
            />
            <ProjectCard
              title="Next.js 16 + Strapi CMS"
              description="Full-stack application with Next.js 16 and Strapi 5, featuring JWT authentication, dynamic content management, protected routes, and server-side caching. Built with modern App Router architecture."
              tags={["Next.js", "TypeScript", "Strapi", "React", "Tailwind"]}
              link="https://github.com/adams999/Project-with-react-16-and-strapi"
            />
            <ProjectCard
              title="Shopify Integration API"
              description="Backend middleware connecting Shopify and Simustream platforms. Features automated webhook synchronization for products, OAuth authentication, Stripe integration, and HTTPS with SSL certificates."
              tags={["Node.js", "Express", "Shopify API", "Stripe", "Webhooks"]}
              link="https://github.com/adams999/shopify-project-api"
            />
            <ProjectCard
              title="Video Player Monorepo"
              description="Modular monorepo with multiple video player implementations using different architectures. Includes webpack-based player, shared component library, and lightweight jQuery player for various deployment scenarios."
              tags={["JavaScript", "Webpack", "jQuery", "Monorepo", "HTML5"]}
              link="https://github.com/adams999/Player-of-videos"
            />
            <ProjectCard
              title="FastAPI + Supabase REST API"
              description="Modern REST API with MVC architecture and 79% test coverage. Features complete CRUD operations, Pydantic validation, auto-generated Swagger docs, and PostgreSQL backend with Supabase."
              tags={["Python", "FastAPI", "Supabase", "PostgreSQL", "Pytest"]}
              link="https://github.com/adams999/Pyton-API-FastAPI-Supabase"
            />
            <ProjectCard
              title="Angular Enterprise Architecture"
              description="Scalable Angular 16 application demonstrating modular architecture with lazy loading, strict TypeScript configuration, comprehensive testing setup with Jasmine/Karma, and production-ready optimization."
              tags={["Angular", "TypeScript", "RxJS", "SCSS", "Jasmine"]}
              link="https://github.com/adams999/Project-with-architecture-NX"
            />
            <ProjectCard
              title="MCP AI Email Integration"
              description="Model Context Protocol tool that bridges AI systems with email functionality, enabling intelligent email automation based on business logic. Built with TypeScript for seamless AI integration."
              tags={["TypeScript", "MCP", "AI", "Node.js"]}
              link="https://github.com/adams999/MCP-AI-to-send-emails"
            />
            <ProjectCard
              title="ESLint Config Package"
              description="Enterprise-grade ESLint configuration package published to npm for Strut Software and Rithm Software projects. Features modular configs for JavaScript, TypeScript, Angular, RxJS with composable inheritance."
              tags={["ESLint", "JavaScript", "TypeScript", "npm", "DevOps"]}
              link="https://github.com/adams999/eslint-config"
            />
            <ProjectCard
              title="PHP REST API with MySQL"
              description="Professional REST API built with PHP 8 following MVC pattern. Features HTTP request logging, multilingual error handling, standardized JSON responses, and database-driven configuration."
              tags={["PHP", "MySQL", "MVC", "REST API"]}
              link="https://github.com/adams999/API_REST_PHP_MYSQL"
            />
            <ProjectCard
              title="ILS Travel Insurance Mobile App"
              description="Master mobile application for travel insurance management built with Ionic 6 and Angular 10. Features multi-client access, unified quoting system, real-time price calculations, SMS/email notifications, and multi-language support (ES/EN/PT). Production APK with native Cordova plugins."
              tags={["Ionic", "Angular", "TypeScript", "Cordova", "Mobile"]}
              link="https://github.com/adams999/APP_ILS_IONIC_ANGULAR"
            />
            <ProjectCard
              title="TravelKit Insurance Mobile App"
              description="Cross-platform travel insurance application with Ionic and Angular. Integrates Authorize.net and PayPal payment gateways, features dynamic quote generation, payment form processing, and native mobile components. Includes internationalization and SMS notifications."
              tags={["Ionic", "Angular", "PayPal", "Mobile", "Cordova"]}
              link="https://github.com/adams999/APP_TRAVELKIT_IONIC_ANGULAR"
            />
            <ProjectCard
              title="Voyager Insurance Mobile App"
              description="Mobile insurance quotation platform with advanced statistical dashboards and analytics. Built with Ionic 6 and Angular 10, featuring real-time calculations, email notifications, payment processing, and comprehensive reporting tools for travel insurance management."
              tags={["Ionic", "Angular", "TypeScript", "Analytics", "Mobile"]}
              link="https://github.com/adams999/APP_VOYAGER_IONIC_ANGULAR"
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
