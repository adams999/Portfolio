export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-gray-400">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
