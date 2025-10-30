export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-semibold">FLAMES<span className="text-amber-400">.BLUE</span></div>
            <p className="mt-3 text-zinc-400 max-w-md">
              More than timekeeping — an ethos of precision, resilience, and modern luxury.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">Visit</div>
            <p className="mt-3 text-zinc-400">
              88 Chrono Ave
              <br /> Zürich, Switzerland
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">Contact</div>
            <p className="mt-3 text-zinc-400">
              hello@flames.blue
              <br /> +41 44 555 13 37
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Flames.Blue. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
