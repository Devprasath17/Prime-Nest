import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, BedDouble, Bath, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  if (variant === 'compact') {
    return (
      <Link to={`/properties/${property.id}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="group"
        >
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-[#C9A84C] text-sm font-medium">{property.priceFormatted}</span>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="font-serif text-lg font-light text-white group-hover:text-[#C9A84C] transition-colors">
              {property.name}
            </h3>
            <p className="text-white/40 text-xs mt-1">{property.location} · {property.sqft.toLocaleString()} SqFt</p>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group bg-[#111] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {property.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#C9A84C] text-black text-xs font-medium px-2.5 py-1 tracking-wide uppercase">
              {property.tag}
            </span>
          </div>
        )}

        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <Heart
            size={14}
            className={liked ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-white'}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg font-light text-white leading-snug group-hover:text-[#C9A84C] transition-colors">
            {property.name}
          </h3>
          <span className="text-[#C9A84C] text-sm font-medium whitespace-nowrap flex-shrink-0">
            {property.priceFormatted}
          </span>
        </div>
        <p className="text-white/40 text-xs mb-4">{property.location}</p>

        <div className="flex items-center gap-5 text-white/50 text-xs">
          <span className="flex items-center gap-1.5">
            <BedDouble size={12} />
            {property.beds} BEDS
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={12} />
            {property.baths} BATHS
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={12} />
            {property.sqft.toLocaleString()} SQFT
          </span>
        </div>
      </div>
    </motion.div>
  );
}
