import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import { properties } from '../data/properties';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

interface FormData {
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  time: string;
  notes: string;
}

export default function ScheduleVisit() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', property: '', date: '', time: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
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
            <p className="section-label mb-4">Private Access</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
              Schedule a Visit
            </h1>
            <p className="text-white/40 text-lg max-w-lg">
              Arrange a private viewing of our exclusive properties with a dedicated advisor.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Property Visit"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                      <Calendar size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-light mb-1">Flexible Scheduling</h4>
                      <p className="text-white/35 text-xs leading-relaxed">
                        We accommodate visits 7 days a week, including evenings and weekends.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-light mb-1">Private Tours</h4>
                      <p className="text-white/35 text-xs leading-relaxed">
                        All viewings are exclusive — no open houses, no shared visits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-light mb-1">Global Access</h4>
                      <p className="text-white/35 text-xs leading-relaxed">
                        We coordinate travel, accommodation, and logistics for international viewings.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
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
                    <h3 className="font-serif text-3xl font-light text-white mb-4">
                      Visit Scheduled
                    </h3>
                    <p className="text-white/40 text-sm mb-2">
                      Thank you, <span className="text-white">{formData.name || 'valued client'}</span>.
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
                      Your dedicated advisor will contact you within 2 hours to confirm all details.
                      We look forward to welcoming you.
                    </p>
                    {formData.property && (
                      <div className="mt-6 p-4 bg-[#C9A84C]/5 border border-[#C9A84C]/10">
                        <p className="text-[#C9A84C] text-xs tracking-wider uppercase">Property</p>
                        <p className="text-white text-sm mt-1">{formData.property}</p>
                        {formData.date && <p className="text-white/40 text-xs mt-1">{formData.date} at {formData.time}</p>}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="bg-[#141414] border border-white/5 p-8 space-y-5"
                  >
                    <h3 className="font-serif text-xl font-light text-white mb-6 pb-4 border-b border-white/5">
                      Booking Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={update('name')}
                          placeholder="Your full name"
                          className="input-dark text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={update('email')}
                          placeholder="your@email.com"
                          className="input-dark text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={update('phone')}
                        placeholder="+1 (555) 000-0000"
                        className="input-dark text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Property of Interest</label>
                      <select
                        value={formData.property}
                        onChange={update('property')}
                        className="input-dark text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select a property...</option>
                        {properties.map(p => (
                          <option key={p.id} value={p.name}>{p.name} — {p.priceFormatted}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={update('date')}
                          className="input-dark text-sm"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Preferred Time *</label>
                        <select
                          value={formData.time}
                          onChange={update('time')}
                          className="input-dark text-sm appearance-none cursor-pointer"
                          required
                        >
                          <option value="">Select time...</option>
                          {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">Additional Notes</label>
                      <textarea
                        value={formData.notes}
                        onChange={update('notes')}
                        placeholder="Specific requirements, questions, or preferences..."
                        rows={4}
                        className="input-dark text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full text-sm tracking-widest uppercase disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        'Schedule Private Visit'
                      )}
                    </button>

                    <p className="text-white/20 text-xs text-center">
                      Your information is kept strictly confidential and will only be used to arrange your visit.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
