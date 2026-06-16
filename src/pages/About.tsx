import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Rocket, Eye, Diamond } from 'lucide-react';
import Footer from '../components/Footer';

const timeline = [
  {
    year: '2008',
    label: 'The Foundation',
    description: 'PrimeNest opens its first advisory hub in Mayfair, London, managing £320M in private assets within its first quarter.',
    side: 'right',
  },
  {
    year: '2012',
    label: 'Digital Frontier',
    description: 'Launch of the Ultra-Portfolio, the first digital private-access platform for off-market properties exceeding $50M.',
    side: 'left',
  },
  {
    year: '2017',
    label: 'Global Dominance',
    description: 'Surpassed $1B in total transaction volume following the record-breaking sale of the Sovereign Heights penthouse.',
    side: 'right',
  },
  {
    year: '2021',
    label: 'The $12B Milestone',
    description: 'Celebrated $5B in transactions and launched the Sustainable Luxury Initiative, focusing on carbon-neutral architectural feats.',
    side: 'left',
  },
];

const values = [
  {
    title: 'Exclusivity',
    description: 'We prioritize private listings and off-market opportunities available only to our network.',
  },
  {
    title: 'Precision',
    description: 'Every detail, from valuation models to interior curation, is executed with surgical accuracy.',
  },
  {
    title: 'Heritage',
    description: 'We honor the architectural history of every asset while preparing it for modern recognition.',
  },
  {
    title: 'Global Vision',
    description: 'A borderless approach to high-value assets, ensuring our clients are home anywhere in the world.',
  },
];

const principles = [
  {
    icon: Rocket,
    title: 'Our Mission',
    description: 'To bridge the gap between global investors and architectural masterpieces through hyper-personalized advisory and data-driven insights.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the definitive global authority on luxury living, setting the benchmark for how property is traded in the digital age.',
  },
  {
    icon: Diamond,
    title: 'Integrity First',
    description: 'In a matter of rules, we offer clarity. Every transaction is handled with the discretion and fiduciary care expected by the world\'s most discerning families.',
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="PrimeNest Legacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Established 2008</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight max-w-2xl mb-6">
              Our Legacy:{' '}
              <span className="italic gold-gradient-text">
                Crafting the Future of Real Estate
              </span>
            </h1>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              PrimeNest was founded on a singular premise: that luxury is not just a price point,
              but an experience defined by architectural integrity and unparalleled service.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-serif text-3xl gold-gradient-text">$12B+</p>
                <p className="text-white/30 text-xs uppercase tracking-wider mt-1">Transaction Volume</p>
              </div>
              <div>
                <p className="font-serif text-3xl gold-gradient-text">15</p>
                <p className="text-white/30 text-xs uppercase tracking-wider mt-1">Global Markets</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2956751/pexels-photo-2956751.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="PrimeNest Heritage"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute bottom-8 -right-4 bg-[#C9A84C]/5 border border-[#C9A84C]/20 p-6 max-w-xs">
                <p className="font-serif text-sm italic text-white/60 leading-relaxed">
                  "Excellence is not an act, but a lifestyle — only the most significant architectural wonders for our clients"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-4xl font-light text-white mb-6">
                The Story Behind the Glass
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                From our inception in London to our current global presence, PrimeNest has
                remained the silent partner in the world's most significant real estate
                acquisitions. We specialize in properties that are more than just homes; they
                are historical legacies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  <p className="text-white/50 text-sm">
                    Founded with a portfolio of just three historic estates in Mayfair, London.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  <p className="text-white/50 text-sm">
                    Expanded to New York and Dubai, redefining the skyscraper living experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label mb-3">Guiding Principles</p>
            <h2 className="font-serif text-4xl font-light text-white">Visionary Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 border border-white/5 hover:border-[#C9A84C]/20 transition-all group"
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors">
                  <principle.icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-light text-white mb-3">{principle.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="gold-text text-2xl font-serif font-light mb-2">Core Values</p>
            <p className="text-white/30 text-sm">The pillars that uphold the PrimeNest legacy.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 border border-white/5 hover:border-[#C9A84C]/20 transition-all"
              >
                <div className="w-1 bg-[#C9A84C] flex-shrink-0 self-stretch" />
                <div>
                  <h3 className="font-serif text-lg text-white mb-2">{value.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-light text-white mb-4">
              Milestones in Excellence
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/20 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`grid grid-cols-2 gap-8 ${item.side === 'right' ? '' : ''}`}
                >
                  {item.side === 'right' ? (
                    <>
                      <div className="text-right">
                        <p className="font-serif text-2xl gold-gradient-text">{item.year}</p>
                        <p className="text-white text-sm font-light mt-1">{item.label}</p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-2 w-3 h-3 bg-[#C9A84C] rounded-full -translate-x-1.5" />
                        <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative pr-8 text-right">
                        <div className="absolute right-0 top-2 w-3 h-3 bg-[#C9A84C] rounded-full translate-x-1.5" />
                        <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <div>
                        <p className="font-serif text-2xl gold-gradient-text">{item.year}</p>
                        <p className="text-white text-sm font-light mt-1">{item.label}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
              Secure Your Legacy
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Join our private network and gain access to the world's most exclusive real estate advisory services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="btn-gold text-sm tracking-widest uppercase">
                Request a Consultation
              </Link>
              <Link to="/properties" className="btn-outline-gold text-sm tracking-widest uppercase">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
