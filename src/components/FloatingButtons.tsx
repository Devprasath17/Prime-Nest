import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/12125550100"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1ebe5d] transition-colors hover:scale-110 duration-200"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="text-white fill-white" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#C9A84C] flex items-center justify-center shadow-lg hover:bg-[#d4b55e] transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={20} className="text-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
