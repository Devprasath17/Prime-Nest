import { Link } from 'react-router-dom';
import { Twitter, Instagram, Globe, Share2, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  variant?: 'full' | 'minimal';
  offices?: string[];
}

const defaultOffices = ['New York', 'London', 'Dubai', 'Tokyo'];

export default function Footer({ variant = 'full', offices = defaultOffices }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {variant === 'full' && (
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <Link to="/">
                <span className="font-serif text-2xl font-light gold-gradient-text tracking-wide">
                  PrimeNest
                </span>
              </Link>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Curating architectural excellence and managing wealth through the world's most
                significant real estate assets since 2008.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-white/40 hover:text-[#C9A84C] transition-colors">
                  <Globe size={16} />
                </a>
                <a href="#" className="text-white/40 hover:text-[#C9A84C] transition-colors">
                  <Share2 size={16} />
                </a>
                <a href="#" className="text-white/40 hover:text-[#C9A84C] transition-colors">
                  <MapPin size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5">Services</h4>
              <ul className="space-y-3">
                {['Portfolio', 'Collections', 'Concierge', 'Advisory'].map(item => (
                  <li key={item}>
                    <Link
                      to={item === 'Portfolio' ? '/properties' : item === 'Advisory' ? '/agents' : item === 'Concierge' ? '/contact' : '/collections'}
                      className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Press Room', to: '/about' },
                  { label: 'Careers', to: '/about' },
                  { label: 'Global Network', to: '/contact' },
                  { label: 'Our Story', to: '/about' },
                ].map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5">Newsletter</h4>
              <p className="text-white/40 text-sm mb-4 leading-relaxed">
                Stay updated with our latest exclusive listings.
              </p>
              {subscribed ? (
                <p className="text-[#C9A84C] text-sm">Thank you for subscribing.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="input-dark text-sm py-2.5 flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#C9A84C] text-black px-4 hover:bg-[#d4b55e] transition-colors flex-shrink-0"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2024 PrimeNest Realty. Curating Architectural Excellence.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
          {offices.length > 0 && (
            <div className="hidden md:flex items-center gap-4">
              {offices.map(office => (
                <span key={office} className="text-white/25 text-xs tracking-wider uppercase hover:text-white/50 cursor-pointer transition-colors">
                  {office}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
