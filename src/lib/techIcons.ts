export interface TechIconConfig {
  icon: string;
  color: string;
}

// Mapeo de tecnologías a iconos de Font Awesome con colores personalizados
export const techIcons: Record<string, TechIconConfig> = {
  // Frontend
  "React": { icon: "fab fa-react", color: "text-cyan-500" },
  "Next.js": { icon: "fas fa-n", color: "text-gray-900 dark:text-white" },
  "Vue.js": { icon: "fab fa-vuejs", color: "text-emerald-500" },
  "Angular": { icon: "fab fa-angular", color: "text-red-600" },
  "TypeScript": { icon: "fas fa-code", color: "text-blue-600" },
  "JavaScript": { icon: "fab fa-js", color: "text-yellow-500" },
  "HTML5": { icon: "fab fa-html5", color: "text-orange-600" },
  "CSS3": { icon: "fab fa-css3-alt", color: "text-blue-500" },
  "Tailwind": { icon: "fas fa-wind", color: "text-cyan-400" },
  "Tailwind CSS": { icon: "fas fa-wind", color: "text-cyan-400" },
  "SCSS": { icon: "fab fa-sass", color: "text-pink-500" },
  "jQuery": { icon: "fas fa-dollar-sign", color: "text-blue-400" },
  "Material UI": { icon: "fas fa-layer-group", color: "text-blue-600" },
  "Redux": { icon: "fas fa-database", color: "text-purple-600" },
  "Zustand": { icon: "fas fa-box", color: "text-amber-600" },

  // Backend
  "Node.js": { icon: "fab fa-node-js", color: "text-green-600" },
  ".NET": { icon: "fas fa-code", color: "text-purple-600" },
  "Express": { icon: "fas fa-server", color: "text-gray-600 dark:text-gray-400" },
  "NestJS": { icon: "fas fa-cat", color: "text-red-500" },
  "Python": { icon: "fab fa-python", color: "text-blue-500" },
  "Django": { icon: "fas fa-d", color: "text-green-700" },
  "FastAPI": { icon: "fas fa-bolt", color: "text-teal-500" },
  "PHP": { icon: "fab fa-php", color: "text-indigo-500" },
  "Laravel": { icon: "fab fa-laravel", color: "text-red-600" },
  "Strapi": { icon: "fas fa-cube", color: "text-indigo-600" },
  "REST API": { icon: "fas fa-plug", color: "text-blue-500" },
  "REST APIs": { icon: "fas fa-plug", color: "text-blue-500" },
  "GraphQL": { icon: "fas fa-project-diagram", color: "text-pink-600" },
  "tRPC": { icon: "fas fa-share-nodes", color: "text-blue-600" },
  "Microservices": { icon: "fas fa-cubes", color: "text-purple-500" },
  "Webhooks": { icon: "fas fa-webhook", color: "text-green-500" },

  // Mobile
  "Ionic": { icon: "fas fa-mobile-screen", color: "text-blue-500" },
  "Flutter": { icon: "fas fa-mobile-alt", color: "text-cyan-500" },
  "Mobile": { icon: "fas fa-mobile", color: "text-violet-500" },
  "Cordova": { icon: "fas fa-mobile-screen-button", color: "text-slate-600" },
  "XCode": { icon: "fab fa-apple", color: "text-gray-800 dark:text-gray-300" },
  "iOS": { icon: "fab fa-apple", color: "text-gray-800 dark:text-gray-300" },
  "Android": { icon: "fab fa-android", color: "text-green-500" },
  "Mobile UI/UX": { icon: "fas fa-mobile", color: "text-purple-500" },
  "App Store": { icon: "fab fa-app-store-ios", color: "text-blue-600" },
  "Play Store": { icon: "fab fa-google-play", color: "text-green-600" },
  "Gradle": { icon: "fas fa-wrench", color: "text-gray-600" },

  // Database
  "MongoDB": { icon: "fas fa-leaf", color: "text-green-600" },
  "PostgreSQL": { icon: "fas fa-database", color: "text-blue-700" },
  "MySQL": { icon: "fas fa-database", color: "text-blue-600" },
  "Redis": { icon: "fas fa-bolt", color: "text-red-600" },
  "Supabase": { icon: "fas fa-database", color: "text-green-500" },
  "Firebase": { icon: "fas fa-fire", color: "text-orange-500" },
  "Prisma": { icon: "fas fa-diagram-project", color: "text-slate-700 dark:text-slate-300" },
  "TypeORM": { icon: "fas fa-table", color: "text-orange-600" },
  "SQL": { icon: "fas fa-database", color: "text-blue-600" },
  "NoSQL": { icon: "fas fa-server", color: "text-green-600" },

  // Cloud & DevOps
  "AWS": { icon: "fab fa-aws", color: "text-orange-500" },
  "AWS S3": { icon: "fab fa-aws", color: "text-orange-500" },
  "Azure": { icon: "fab fa-microsoft", color: "text-blue-500" },
  "Docker": { icon: "fab fa-docker", color: "text-blue-500" },
  "Kubernetes": { icon: "fas fa-dharmachakra", color: "text-blue-600" },
  "DevOps": { icon: "fas fa-gears", color: "text-cyan-600" },
  "CI/CD": { icon: "fas fa-rotate", color: "text-teal-500" },
  "GitHub": { icon: "fab fa-github", color: "text-gray-900 dark:text-white" },
  "GitHub Actions": { icon: "fab fa-github", color: "text-gray-900 dark:text-white" },
  "Jenkins": { icon: "fas fa-gears", color: "text-red-600" },
  "Nginx": { icon: "fas fa-server", color: "text-green-600" },
  "Linux": { icon: "fab fa-linux", color: "text-yellow-500" },
  "Git": { icon: "fab fa-git-alt", color: "text-orange-600" },

  // Tools & Testing
  "Webpack": { icon: "fas fa-box", color: "text-blue-500" },
  "ESLint": { icon: "fas fa-check-circle", color: "text-indigo-600" },
  "Pytest": { icon: "fas fa-flask", color: "text-yellow-600" },
  "Jasmine": { icon: "fas fa-vial", color: "text-purple-600" },
  "Jest": { icon: "fas fa-flask", color: "text-red-600" },
  "Testing": { icon: "fas fa-vial", color: "text-green-600" },
  "Cypress": { icon: "fas fa-circle-check", color: "text-emerald-600" },
  "npm": { icon: "fab fa-npm", color: "text-red-600" },
  "Monorepo": { icon: "fas fa-folder-tree", color: "text-amber-600" },
  "MVC": { icon: "fas fa-sitemap", color: "text-blue-600" },
  "Agile/Scrum": { icon: "fas fa-users", color: "text-blue-600" },
  "Jira": { icon: "fab fa-jira", color: "text-blue-500" },
  "Team Leadership": { icon: "fas fa-people-group", color: "text-purple-600" },
  "Code Review": { icon: "fas fa-code-branch", color: "text-orange-600" },
  "Figma": { icon: "fab fa-figma", color: "text-pink-500" },
  "VS Code": { icon: "fas fa-file-code", color: "text-blue-600" },
  "Postman": { icon: "fas fa-paper-plane", color: "text-orange-500" },
  "Wrench": { icon: "fas fa-wrench", color: "text-gray-600" },
  "Cloud": { icon: "fas fa-cloud", color: "text-sky-500" },

  // Payment & APIs
  "Stripe": { icon: "fab fa-stripe", color: "text-indigo-600" },
  "PayPal": { icon: "fab fa-paypal", color: "text-blue-600" },
  "Shopify": { icon: "fab fa-shopify", color: "text-green-600" },
  "Shopify API": { icon: "fab fa-shopify", color: "text-green-600" },

  // Communication
  "Socket.io": { icon: "fas fa-comments", color: "text-gray-700 dark:text-gray-300" },
  "RxJS": { icon: "fas fa-share-nodes", color: "text-pink-600" },

  // AI & Advanced
  "AI": { icon: "fas fa-robot", color: "text-purple-600" },
  "MCP": { icon: "fas fa-microchip", color: "text-cyan-600" },
  "Analytics": { icon: "fas fa-chart-line", color: "text-blue-600" },
};

// Función para obtener el icono de una tecnología
export function getTechIcon(tech: string): TechIconConfig {
  return techIcons[tech] || { icon: "fas fa-code", color: "text-gray-600 dark:text-gray-400" };
}
