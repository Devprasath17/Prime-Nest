import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const collections = [
  {
    title: 'The Sky Collection',
    description: 'Penthouses and sky residences offering unparalleled elevation and perspective.',
    count: 12,
    image: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'PENTHOUSE',
  },
  {
    title: 'Mediterranean Estates',
    description: 'Historic and contemporary villas along the most coveted coastlines of Europe.',
    count: 18,
    image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'COASTAL',
  },
  {
    title: 'Alpine Retreats',
    description: 'Private mountain sanctuaries in the world\'s most exclusive ski destinations.',
    count: 9,
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'MOUNTAIN',
  },
  {
    title: 'Urban Icons',
    description: 'Architectural statements in the world\'s most dynamic metropolitan centers.',
    count: 24,
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'CITY',
  },
  {
    title: 'Sustainable Luxury',
    description: 'Net-zero and carbon-neutral estates that prove sustainability and luxury coexist.',
    count: 7,
    image: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'ECO',
  },
  {
    title: 'Island & Retreat',
    description: 'Private island residences and remote retreats for the ultimate in exclusivity.',
    count: 5,
    image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'ISLAND',
  },
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Curated Portfolios</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
              Collections
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Handpicked groupings of our finest properties, organized by lifestyle, location,
              and architectural vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, i) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <Link to="/properties">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs px-2.5 py-1 tracking-widest uppercase">
                        {collection.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-serif text-xl font-light text-white mb-1 group-hover:text-[#C9A84C] transition-colors">
                            {collection.title}
                          </h3>
                          <p className="text-white/50 text-xs">{collection.count} properties</p>
                        </div>
                        <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-all text-white/40">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#111] border-x border-b border-white/5 group-hover:border-[#C9A84C]/10 transition-colors">
                    <p className="text-white/35 text-xs leading-relaxed">{collection.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-light text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Our advisors have access to thousands of off-market properties worldwide.
              Let us curate a bespoke selection for you.
            </p>
            <Link to="/contact" className="btn-gold text-sm tracking-widest uppercase">
              Speak to an Advisor
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
