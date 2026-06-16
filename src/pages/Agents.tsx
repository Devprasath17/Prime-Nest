import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { agents } from '../data/agents';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Agents() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">The Curators of Architecture</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
            Elite Global Advisors
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Meet the visionaries who bridge the gap between architectural masterpiece and
            lifestyle legacy. Our advisors represent the world's most discerning collectors
            and homeowners.
          </p>
        </motion.div>
      </section>

      {/* Agents Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-xl font-light text-white mb-1">{agent.name}</h3>
                  <p className="text-[#C9A84C] text-xs tracking-wider">{agent.designation}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">{agent.description}</p>
                  <div className="flex flex-col gap-2 w-full">
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] py-2 text-xs hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      <Mail size={12} /> Contact
                    </a>
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center justify-center gap-2 bg-[#C9A84C] text-black py-2 text-xs hover:bg-[#d4b55e] transition-colors"
                    >
                      <Phone size={12} /> {agent.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-4">Our Methodology</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Expertise That Transcends Transactions
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-10">
                At PrimeNest, we believe that real estate is more than square footage — it is
                an art form, a legacy, and a sanctuary. Our advisors are trained not just in
                market analytics, but in architectural history, interior design trends, and the
                nuanced needs of global citizens.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-serif text-4xl gold-gradient-text mb-1">94%</p>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Off-Market Success</p>
                </div>
                <div>
                  <p className="font-serif text-4xl gold-gradient-text mb-1">$12B+</p>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Lifetime Advisory</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Advisory Excellence"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C9A84C] flex items-center justify-center">
                <span className="text-black font-serif text-3xl">A</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Details */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="section-label mb-3">Meet The Team</p>
            <h2 className="font-serif text-3xl font-light text-white">Our Advisors</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 bg-[#111] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 p-5 group"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-20 h-24 object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-serif text-lg font-light text-white">{agent.name}</h3>
                      <p className="text-[#C9A84C] text-xs tracking-wide">{agent.designation}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">{agent.experience} yrs</p>
                      <p className="text-white/25 text-xs">Experience</p>
                    </div>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed mb-3 line-clamp-2">{agent.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-white/25 text-xs">{agent.listings} listings</span>
                    <span className="text-white/10">·</span>
                    <span className="text-[#C9A84C] text-xs">{agent.volume} volume</span>
                    <a
                      href={`mailto:${agent.email}`}
                      className="ml-auto border border-[#C9A84C]/30 text-[#C9A84C] text-xs px-3 py-1.5 hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
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
            <h2 className="font-serif text-4xl font-light text-white mb-4">
              Work With an Advisor
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Schedule a private consultation with one of our global advisors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="btn-gold text-sm tracking-widest uppercase">
                Schedule Visit
              </Link>
              <Link to="/contact" className="btn-outline-gold text-sm tracking-widest uppercase">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer
        offices={['New York', 'London', 'Dubai', 'Tokyo']}
      />
    </main>
  );
}
