import { motion } from 'framer-motion';

const products = [
  {
    id: 'x1',
    name: 'Chrono X1 Phantom',
    price: 8990,
    img: 'https://images.unsplash.com/photo-1548171916-c0dea1fcb6d8?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 't7',
    name: 'Titanium T7 Eclipse',
    price: 11990,
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    id: 'a9',
    name: 'Apex A9 Solar',
    price: 7590,
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'd4',
    name: 'Deepsea D4 Pro',
    price: 9990,
    img: 'https://images.unsplash.com/photo-1548171916-c0dea1fcb6d8?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 bg-gradient-to-b from-black via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Signature Collection</h2>
            <p className="mt-2 text-zinc-400 max-w-prose">
              A curated selection of precision timepieces — crafted for those who lead.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 text-sm text-zinc-200 hover:bg-white/5 transition"
          >
            View All
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-white/10"
            >
              {p.badge && (
                <div className="absolute left-3 top-3 z-10 text-[11px] tracking-wide uppercase">
                  <span className="px-2 py-1 rounded-full bg-amber-400 text-black font-semibold">{p.badge}</span>
                </div>
              )}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />
              </div>
              <div className="relative p-4">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="mt-1 text-amber-300 font-semibold">${(p.price).toLocaleString()}</p>
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-400 text-black font-medium hover:bg-amber-300 transition">
                    Add to Cart
                  </button>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/10 text-zinc-200 hover:bg-white/5 transition"
                  >
                    Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
