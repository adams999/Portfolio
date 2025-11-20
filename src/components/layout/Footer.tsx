export function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-white/10 bg-gray-50 dark:bg-black py-8 text-center text-sm text-gray-600 dark:text-gray-400 transition-colors">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Portfolio. Adams Juliany Contreras Ramírez. Rendered in SSR.</p>
      </div>
    </footer>
  );
}
