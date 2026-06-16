import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Search, MapPin, Home as HomeIcon, DollarSign, ArrowRight, Star, Diamond, Shield, Globe, ChevronRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { getFeaturedProperties } from '../data/properties';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedCounter({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 4.2, prefix: '$', suffix: 'B+', label: 'TOTAL ASSETS MANAGED', decimal: true },
  { value: 500, prefix: '', suffix: '+', label: 'EXCLUSIVE LISTINGS SOLD' },
  { value: 1000, prefix: '', suffix: '+', label: 'HNI CLIENTS SERVED' },
  { value: 24, prefix: '', suffix: '', label: 'GLOBAL OFFICE LOCATIONS' },
];

const testimonials = [
  {
    quote: '"PrimeNest doesn\'t just sell real estate; they curate a lifestyle. Their attention to architectural detail and their understanding of true luxury is unmatched in the industry."',
    name: 'Alexander Vanderbilt',
    title: 'FOUNDING PARTNER, V-HOLDINGS',
    rating: 5,
  },
  {
    quote: '"Working with PrimeNest was a revelation. Their discretion, market knowledge, and global network delivered us a property we didn\'t think existed."',
    name: 'Isabella Chen',
    title: 'CEO, MERIDIAN CAPITAL GROUP',
    rating: 5,
  },
  {
    quote: '"The advisory team at PrimeNest understands that acquiring property at this level is about legacy, not just square footage. Exceptional in every regard."',
    name: 'Marcus Aurelius III',
    title: 'FOUNDER, GOLDEN GATE VENTURES',
    rating: 5,
  },
];

const services = [
  {
    icon: Diamond,
    title: 'Exclusive Access',
    description: 'Gain entry to off-market estates and private listings that never hit the public market, reserved exclusively for our network.',
  },
  {
    icon: Shield,
    title: 'Absolute Discretion',
    description: 'We prioritize your privacy above all. Our concierge-led approach ensures that every transaction remains strictly confidential.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'With agents in every major luxury hub worldwide, we bridge the gap between continents to find your perfect residence.',
  },
];

const partners = ['BLACKSTONE', 'KKR', 'CARLYLE', 'TPG', 'APOLLO', 'ARES'];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [propertyType, setPropertyType] = useState('Property T...');
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const featured = getFeaturedProperties().slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="section-label mb-6"
            >
              Curating Architectural Excellence
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-6"
            >
              Find Your Dream Property{' '}
              <span className="gold-gradient-text">With PrimeNest Realty</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
            >
              Discover luxury villas, premium apartments, and investment opportunities in prime locations.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/properties" className="btn-gold text-sm tracking-widest uppercase">
                Explore Properties
              </Link>
              <Link to="/schedule" className="btn-outline-gold text-sm tracking-widest uppercase">
                Schedule A Visit
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 pb-10"
        >
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 flex-1 bg-white/5 px-3 py-2.5">
              <MapPin size={14} className="text-[#C9A84C] flex-shrink-0" />
              <input
                type="text"
                placeholder="Location, Neig..."
                className="bg-transparent text-white text-sm placeholder-white/30 w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2.5 cursor-pointer">
              <HomeIcon size={14} className="text-[#C9A84C] flex-shrink-0" />
              <span className="text-white/50 text-sm">{propertyType}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2.5">
              <DollarSign size={14} className="text-[#C9A84C] flex-shrink-0" />
              <span className="text-white/50 text-sm">Price Range</span>
            </div>
            <Link
              to="/properties"
              className="bg-[#C9A84C] text-black px-6 py-2.5 text-sm font-medium hover:bg-[#d4b55e] transition-colors flex items-center gap-2 justify-center"
            >
              <Search size={14} />
              Search
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl gold-gradient-text font-light">
                  {statsInView ? (
                    stat.decimal ? (
                      <span>{stat.prefix}{stat.value}{stat.suffix}</span>
                    ) : (
                      <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    )
                  ) : (
                    <span>{stat.prefix}0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-white/30 text-xs tracking-[0.2em] mt-2 uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
                The Curated Collection
              </h2>
              <p className="text-white/40 text-sm max-w-xs">
                Exceptional architectural masterpieces selected for the discerning few.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 20 }}
              viewport={{ once: true }}
            >
              <Link
                to="/properties"
                className="text-[#C9A84C] text-sm hover:text-white transition-colors flex items-center gap-2 group"
              >
                View All Portfolio
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mosaic layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Large featured card */}
            {featured[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative overflow-hidden aspect-[4/3] lg:row-span-2"
              >
                <Link to={`/properties/${featured[0].id}`}>
                  <img
                    src={featured[0].image}
                    alt={featured[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {featured[0].tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-black text-xs font-medium px-3 py-1 uppercase tracking-wide">
                        {featured[0].tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-light text-white mb-1">{featured[0].name}</h3>
                        <p className="text-white/50 text-sm">{featured[0].location}</p>
                        <div className="flex items-center gap-4 mt-2 text-white/40 text-xs">
                          <span>{featured[0].beds} Bd</span>
                          <span>{featured[0].baths} Ba</span>
                        </div>
                      </div>
                      <span className="text-[#C9A84C] text-lg font-light">{featured[0].priceFormatted}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Right column: 4 smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featured.slice(1, 5).map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden aspect-[4/3]"
                >
                  <Link to={`/properties/${property.id}`}>
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-base font-light text-white">{property.name}</h3>
                      <p className="text-white/40 text-xs">{property.location}</p>
                      <p className="text-[#C9A84C] text-sm mt-1">{property.priceFormatted}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
              Unrivaled Service
            </h2>
            <div className="w-16 h-px bg-[#C9A84C] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center p-8 border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors">
                  <service.icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-light text-white mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 font-serif text-[20rem] text-white/[0.02] select-none leading-none">
          99
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>

          <div className="relative min-h-[180px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <blockquote className="font-serif text-xl md:text-2xl font-light text-white/90 leading-relaxed italic max-w-3xl">
                  {t.quote}
                </blockquote>
                <div className="mt-8">
                  <p className="text-[#C9A84C] text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs tracking-widest mt-1 uppercase">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-6 h-px transition-all duration-300 ${
                  i === activeTestimonial ? 'bg-[#C9A84C]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/25 text-xs tracking-[0.3em] uppercase mb-8">Trusted Partners</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <span className="text-white/20 text-xs tracking-[0.3em] font-medium hover:text-white/40 transition-colors cursor-default">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Begin Your Journey</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
              Secure Your Legacy
            </h2>
            <p className="text-white/50 mb-10 text-lg font-light">
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

      {/* Newsletter */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-4">Stay Informed</p>
            <h2 className="font-serif text-3xl font-light text-white mb-4">
              Exclusive Insights Delivered
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Receive curated property reports and architectural insights directly to your inbox.
            </p>
            <form className="flex max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="input-dark flex-1 text-sm"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] text-black px-5 hover:bg-[#d4b55e] transition-colors flex-shrink-0 flex items-center"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
