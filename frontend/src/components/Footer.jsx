export default function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        
        <p className="text-xs text-zinc-500 leading-relaxed max-w-3xl mx-auto">
          The projects showcased in this portfolio represent conceptual implementations and technical demonstrations.  
          Any eCommerce, payment integrations, or business workflows are simulated for learning and presentation purposes only,  
          and do not reflect active commercial services.
        </p>

        <p className="mt-4 text-sm text-zinc-400">
          © {new Date().getFullYear()} Ahmed Tanwar. Crafted with passion and precision.
        </p>

      </div>
    </footer>
  );
}
