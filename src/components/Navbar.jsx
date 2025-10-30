import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-black/40 rounded-2xl border border-white/10 py-3 px-4 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/70 via-amber-400/30 to-white/10 blur-2xl opacity-40 group-hover:opacity-60 transition" />
              <span className="relative text-lg font-semibold tracking-wide">
                FLAMES<span className="text-amber-400">.BLUE</span>
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="text-sm text-zinc-300 hover:text-white transition relative"
              >
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                {i.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Account" className="p-2 rounded-full hover:bg-white/5 transition">
              <User className="w-5 h-5 text-zinc-300" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-white/5 transition">
              <ShoppingCart className="w-5 h-5 text-zinc-300" />
            </button>
            <button
              aria-label="Menu"
              className="md:hidden p-2 rounded-full hover:bg-white/5 transition"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur"
          >
            <div className="px-4 py-3 flex flex-col">
              {navItems.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-zinc-300 hover:text-white border-b border-white/5 last:border-0"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
