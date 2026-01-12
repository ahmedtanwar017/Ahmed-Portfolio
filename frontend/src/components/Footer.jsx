export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ahmed Tanwar. All rights reserved.</p>

        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="#hero" className="hover:underline text-sm">Home</a>
          <a href="#about" className="hover:underline text-sm">About</a>
          <a href="#experience" className="hover:underline text-sm">Experience</a>
          <a href="#projects" className="hover:underline text-sm">Projects</a>
          <a href="#contact" className="hover:underline text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
}
