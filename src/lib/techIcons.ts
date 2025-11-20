// Mapeo de tecnologías a iconos de Font Awesome
export const techIcons: Record<string, string> = {
  // Frontend
  "React": "fab fa-react",
  "Next.js": "fas fa-n",
  "Vue.js": "fab fa-vuejs",
  "Angular": "fab fa-angular",
  "TypeScript": "fas fa-code",
  "JavaScript": "fab fa-js",
  "HTML5": "fab fa-html5",
  "CSS3": "fab fa-css3-alt",
  "Tailwind": "fas fa-wind",
  "SCSS": "fab fa-sass",
  "jQuery": "fas fa-dollar-sign",

  // Backend
  "Node.js": "fab fa-node-js",
  ".NET": "fas fa-code",
  "Express": "fas fa-server",
  "NestJS": "fas fa-cat",
  "Python": "fab fa-python",
  "FastAPI": "fas fa-bolt",
  "PHP": "fab fa-php",
  "Laravel": "fab fa-laravel",
  "Strapi": "fas fa-cube",
  "REST API": "fas fa-plug",
  "GraphQL": "fas fa-project-diagram",
  "Webhooks": "fas fa-webhook",

  // Mobile
  "Ionic": "fas fa-mobile-screen",
  "Flutter": "fas fa-mobile-alt",
  "Mobile": "fas fa-mobile",
  "Cordova": "fas fa-mobile-screen-button",
  "iOS": "fab fa-apple",
  "Android": "fab fa-android",

  // Database
  "MongoDB": "fas fa-leaf",
  "PostgreSQL": "fas fa-database",
  "MySQL": "fas fa-database",
  "Redis": "fas fa-bolt",
  "Supabase": "fas fa-database",
  "Firebase": "fas fa-fire",

  // Cloud & DevOps
  "AWS": "fab fa-aws",
  "AWS S3": "fab fa-aws",
  "Azure": "fab fa-microsoft",
  "Docker": "fab fa-docker",
  "Kubernetes": "fas fa-dharmachakra",
  "DevOps": "fas fa-gears",
  "CI/CD": "fas fa-rotate",
  "GitHub": "fab fa-github",
  "Git": "fab fa-git-alt",

  // Tools & Testing
  "Webpack": "fas fa-box",
  "ESLint": "fas fa-check-circle",
  "Pytest": "fas fa-flask",
  "Jasmine": "fas fa-vial",
  "Jest": "fas fa-flask",
  "npm": "fab fa-npm",
  "Monorepo": "fas fa-folder-tree",
  "MVC": "fas fa-sitemap",

  // Payment & APIs
  "Stripe": "fab fa-stripe",
  "PayPal": "fab fa-paypal",
  "Shopify": "fab fa-shopify",
  "Shopify API": "fab fa-shopify",

  // Communication
  "Socket.io": "fas fa-comments",
  "RxJS": "fas fa-share-nodes",

  // AI & Advanced
  "AI": "fas fa-robot",
  "MCP": "fas fa-microchip",
  "Analytics": "fas fa-chart-line",
};

// Función para obtener el icono de una tecnología
export function getTechIcon(tech: string): string {
  return techIcons[tech] || "fas fa-code";
}
