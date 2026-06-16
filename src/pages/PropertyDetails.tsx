import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BedDouble, Bath, Maximize2, Car, MapPin, ChevronLeft, ChevronRight,
  ArrowLeft, Waves, Wine, Sparkles, Shield, Film, Flame, Building2, Leaf, Sun, Trees, Plane, Anchor, Snowflake, Dumbbell
} from 'lucide-react';
import Footer from '../components/Footer';
import { getPropertyById, getSimilarProperties } from '../data/properties';
import { getAgentById } from '../data/agents';
import PropertyCard from '../components/PropertyCard';

const iconMap: Record<string, React.ElementType> = {
  Waves, Wine, Sparkles, Shield, Film, Flame, Building2, Leaf, Sun, Trees, Plane, Anchor, Snowflake, Car, Dumbbell
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({ date: '', name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-4">
        <p className="text-white/50 font-serif text-2xl">Property not found</p>
        <Link to="/properties" className="btn-gold text-sm">View All Properties</Link>
      </div>
    );
  }

  const agent = getAgentById(property.agentId);
  const similar = getSimilarProperties(property.id, 2);
  const images = property.images.length > 0 ? property.images : [property.image];

  const prevImage = () => setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage(prev => (prev + 1) % images.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Image Gallery Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={images[currentImage]}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Gallery navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </>
        )}

        {/* Image dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? 'bg-[#C9A84C] w-4' : 'bg-white/40'}`}
            />
          ))}
        </div>

        {/* Property title overlay */}
        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">{property.location}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-white">{property.name}</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-white/5">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Price</p>
                <p className="font-serif text-3xl gold-gradient-text">{property.priceFormatted}</p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Square Ft.</p>
                <p className="font-serif text-3xl text-white">{property.sqft.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-6 text-white/60 text-sm ml-auto self-end">
                <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.beds} BED</span>
                <span className="flex items-center gap-1.5"><Bath size={14} /> {property.baths} BATH</span>
                <span className="flex items-center gap-1.5"><Car size={14} /> {property.parking} PARK</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Architectural Narrative</h2>
              <p className="text-white/50 leading-relaxed text-sm">{property.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-serif text-2xl font-light text-white mb-6">Curated Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => {
                  const Icon = iconMap[amenity.icon] || Shield;
                  return (
                    <motion.div
                      key={amenity.name}
                      whileHover={{ y: -3 }}
                      className="bg-[#141414] border border-white/5 p-5 text-center hover:border-[#C9A84C]/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-[#C9A84C]/20">
                        <Icon size={18} className="text-[#C9A84C]" />
                      </div>
                      <h4 className="text-white text-sm font-light mb-1">{amenity.name}</h4>
                      <p className="text-white/30 text-xs">{amenity.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Floor Plan */}
            <div>
              <h2 className="font-serif text-2xl font-light text-white mb-6">Floor Plans</h2>
              <div className="relative bg-[#141414] border border-white/5 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Floor Plan"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 px-6 py-3 text-white text-sm hover:border-[#C9A84C]/50 transition-colors">
                    <Maximize2 size={14} />
                    View High-Res Blueprints
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-serif text-2xl font-light text-white mb-6">Neighborhood &amp; Proximity</h2>
              <div className="relative bg-[#141414] border border-white/5 aspect-[16/9] overflow-hidden flex items-center justify-center">
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${property.coordinates.lng},${property.coordinates.lat},12,0/800x450@2x?access_token=pk.placeholder`}
                  alt="Property Location Map"
                  className="w-full h-full object-cover opacity-30"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute flex flex-col items-center gap-3">
                  <span className="bg-[#C9A84C] text-black text-xs font-medium px-4 py-1.5 uppercase tracking-wider">
                    PrimeNest Location
                  </span>
                  <MapPin size={28} className="text-[#C9A84C]" />
                  <p className="text-white/40 text-sm text-center">{property.location}</p>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="section-label mb-1">Similar Opportunities</p>
                  <h2 className="font-serif text-3xl font-light text-white">The Collection</h2>
                </div>
                <Link to="/properties" className="text-[#C9A84C] text-xs hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider">
                  View All Properties →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {similar.map(p => (
                  <PropertyCard key={p.id} property={p} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="space-y-6">
            <div className="sticky top-24">
              <div className="bg-[#141414] border border-white/5 p-6">
                <h3 className="font-serif text-xl font-light text-white mb-6">
                  Inquire About This Estate
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-4">
                      <Shield size={20} className="text-[#C9A84C]" />
                    </div>
                    <p className="text-white font-light mb-2">Inquiry Received</p>
                    <p className="text-white/40 text-sm">Your advisor will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-wider block mb-2">
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData(d => ({ ...d, date: e.target.value }))}
                        className="input-dark text-sm"
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                      placeholder="Full Name"
                      className="input-dark text-sm"
                      required
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                      placeholder="Email Address"
                      className="input-dark text-sm"
                      required
                    />

                    {/* Agent */}
                    {agent && (
                      <div className="flex items-center gap-3 py-3 border-t border-b border-white/5 my-4">
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="w-10 h-10 object-cover grayscale"
                        />
                        <div>
                          <p className="text-white text-sm font-light">{agent.name}</p>
                          <p className="text-white/30 text-xs">Dedicated Advisor</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-gold w-full text-sm tracking-widest uppercase"
                    >
                      Request Private Viewing
                    </button>
                  </form>
                )}
              </div>

              <Link
                to="/schedule"
                className="block mt-4 bg-[#0d0d0d] border border-[#C9A84C]/20 p-5 hover:border-[#C9A84C]/50 transition-all duration-300 group text-center"
              >
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">Schedule</p>
                <p className="text-white font-serif text-lg font-light group-hover:text-[#C9A84C] transition-colors">
                  Book a Site Visit
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
