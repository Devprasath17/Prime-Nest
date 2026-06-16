import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Portfolio', href: '/properties' },
  { label: 'Collections', href: '/collections' },
  { label: 'Concierge', href: '/contact' },
  { label: 'Advisory', href: '/agents' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <span className="font-serif text-2xl font-light gold-gradient-text tracking-wide">
              PrimeNest
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-light tracking-wide transition-colors duration-200 relative group ${
                    isActive ? 'text-[#C9A84C]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/schedule"
              className="btn-outline-gold text-sm px-5 py-2 tracking-widest uppercase text-xs"
            >
              Schedule Visit
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.href}
                    className="text-3xl font-serif font-light text-white hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  to="/schedule"
                  className="btn-gold inline-block mt-4 text-sm tracking-widest uppercase"
                >
                  Schedule Visit
                </Link>
              </motion.div>
            </nav>

            <div className="mt-auto mb-12 text-white/30 text-sm">
              © 2024 PrimeNest Realty. Curating Architectural Excellence.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
