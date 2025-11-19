import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
          Adams Contreras
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
