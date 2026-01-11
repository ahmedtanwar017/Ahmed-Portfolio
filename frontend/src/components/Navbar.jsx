export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h2 className="font-bold text-lg">Ahmed</h2>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
