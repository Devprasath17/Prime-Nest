import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Twitter, Instagram, MessageCircle, CheckCircle2, ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const offices = [
  { city: 'New York', address: '432 Park Avenue, 90th Floor', hours: 'Mon–Fri: 9AM–7PM EST', phone: '+1 (212) 555-0100' },
  { city: 'London', address: '1 Mayfair Place, Mayfair', hours: 'Mon–Fri: 9AM–7PM GMT', phone: '+44 20 7946 0958' },
  { city: 'Dubai', address: 'Burj Khalifa, Level 148', hours: 'Mon–Fri: 9AM–7PM GST', phone: '+971 4 555 0100' },
  { city: 'Tokyo', address: 'Roppongi Hills Mori Tower', hours: 'Mon–Fri: 9AM–7PM JST', phone: '+81 3 5555 0100' },
];

const socialLinks = [
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/40 text-lg max-w-lg">
              Our team is available around the clock to assist you with any inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <a
                  href="tel:+12125550100"
                  className="flex items-center gap-4 p-5 bg-[#141414] border border-white/5 hover:border-[#C9A84C]/30 transition-all group"
                >
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
                    <Phone size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Call Now</p>
                    <p className="text-white text-sm">+1 (212) 555-0100</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 ml-auto group-hover:text-[#C9A84C] transition-colors" />
                </a>

                <a
                  href="mailto:hello@primenest.com"
                  className="flex items-center gap-4 p-5 bg-[#141414] border border-white/5 hover:border-[#C9A84C]/30 transition-all group"
                >
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
                    <Mail size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Email Us</p>
                    <p className="text-white text-sm">hello@primenest.com</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 ml-auto group-hover:text-[#C9A84C] transition-colors" />
                </a>

                <a
                  href="https://wa.me/12125550100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle size={16} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[#25D366]/60 text-xs uppercase tracking-wider">WhatsApp</p>
                    <p className="text-white text-sm">Chat on WhatsApp</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 ml-auto group-hover:text-[#25D366] transition-colors" />
                </a>
              </motion.div>

              {/* Social */}
              <div>
                <p className="section-label mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <p className="section-label mb-4">Our Location</p>
                <div className="relative aspect-[16/9] bg-[#141414] border border-white/5 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Office Location"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute flex flex-col items-center gap-2">
                    <MapPin size={24} className="text-[#C9A84C]" />
                    <p className="text-white/50 text-xs">432 Park Avenue, New York</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#141414] border border-[#C9A84C]/20 p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-16 h-16 bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 size={28} className="text-[#C9A84C]" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-light text-white mb-3">Message Received</h3>
                  <p className="text-white/40 text-sm">
                    Thank you for reaching out. A member of our team will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="bg-[#141414] border border-white/5 p-8 space-y-5">
                    <h3 className="font-serif text-xl font-light text-white mb-6 pb-4 border-b border-white/5">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Full Name *</label>
                        <input type="text" value={formData.name} onChange={update('name')} placeholder="Your name" className="input-dark text-sm" required />
                      </div>
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Email *</label>
                        <input type="email" value={formData.email} onChange={update('email')} placeholder="your@email.com" className="input-dark text-sm" required />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Phone</label>
                      <input type="tel" value={formData.phone} onChange={update('phone')} placeholder="+1 (555) 000-0000" className="input-dark text-sm" />
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Subject</label>
                      <select value={formData.subject} onChange={update('subject')} className="input-dark text-sm appearance-none cursor-pointer">
                        <option value="">Select subject...</option>
                        <option>Property Inquiry</option>
                        <option>Investment Advisory</option>
                        <option>Private Consultation</option>
                        <option>Press &amp; Media</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={update('message')}
                        placeholder="How can we assist you?"
                        rows={5}
                        className="input-dark text-sm resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full text-sm tracking-widest uppercase disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                      ) : 'Send Message'}
                    </button>
                  </form>

                  {/* Office Hours */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {offices.slice(0, 2).map(office => (
                      <div key={office.city} className="bg-[#141414] border border-white/5 p-4">
                        <p className="text-[#C9A84C] text-xs tracking-wider uppercase mb-2">{office.city}</p>
                        <p className="text-white/50 text-xs mb-1">{office.address}</p>
                        <div className="flex items-center gap-1 text-white/30 text-xs">
                          <Clock size={10} />
                          {office.hours}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Offices */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl font-light text-white">Global Offices</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/5 hover:border-[#C9A84C]/20 transition-all"
              >
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">{office.city}</p>
                <div className="space-y-2 text-white/40 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin size={10} className="mt-0.5 flex-shrink-0" />
                    {office.address}
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={10} className="mt-0.5 flex-shrink-0" />
                    {office.hours}
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={10} className="mt-0.5 flex-shrink-0" />
                    {office.phone}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
