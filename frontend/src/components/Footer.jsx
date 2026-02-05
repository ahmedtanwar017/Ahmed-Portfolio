export default function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* ABOUT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Ahmed Tanwar
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Full Stack Developer focused on building modern, scalable web applications using MERN, Next.js and AI driven solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Projects</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="space-y-3 text-sm text-zinc-400">
              <p>Email: ahmed@example.com</p>
              <p>Location: Mumbai, India</p>

              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
                <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
                <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
              </div>
            </div>
          </div>

        </div>

        {/* DISCLAIMER (IMPORTANT FOR PROJECTS LIKE ECOMMERCE) */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-zinc-500">
          <p>
            Disclaimer: The projects displayed on this portfolio are for educational and demonstration purposes only.  
            Any eCommerce, payment or business related projects shown are sample implementations.
          </p>

          <p className="mt-4">
            © {new Date().getFullYear()} Ahmed Tanwar. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
