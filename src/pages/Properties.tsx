import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Grid, List, Heart, BedDouble, Bath, Maximize2, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { properties } from '../data/properties';
import type { Property } from '../data/properties';

const propertyTypes = ['Penthouse', 'Villa', 'Estate', 'Loft'];
const bedOptions = ['Any', '1', '2', '3', '4', '5+'];
const bathOptions = ['Any', '1', '2', '3', '4', '5+'];

const ITEMS_PER_PAGE = 6;

export default function Properties() {
  const [location, setLocation] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState(50);
  const [beds, setBeds] = useState('Any');
  const [baths, setBaths] = useState('Any');
  const [gridView, setGridView] = useState(true);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('CURATED');

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
    setPage(1);
  };

  const toggleLike = (id: string) => {
    setLikedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = properties.filter(p => {
      const maxBudget = budget * 1_000_000;
      const matchLocation = !location || p.location.toLowerCase().includes(location.toLowerCase()) || p.city.toLowerCase().includes(location.toLowerCase());
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
      const matchBudget = p.price <= maxBudget + 10_000_000;
      const matchBeds = beds === 'Any' || (beds === '5+' ? p.beds >= 5 : p.beds >= parseInt(beds));
      const matchBaths = baths === 'Any' || (baths === '5+' ? p.baths >= 5 : p.baths >= parseInt(baths));
      return matchLocation && matchType && matchBudget && matchBeds && matchBaths;
    });

    if (sortBy === 'PRICE: LOW') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'PRICE: HIGH') result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [location, selectedTypes, budget, beds, baths, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetFilters = () => {
    setLocation('');
    setSelectedTypes([]);
    setBudget(50);
    setBeds('Any');
    setBaths('Any');
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="pt-20 min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 xl:w-80 border-r border-white/5 p-8 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-serif text-2xl font-light text-white mb-1">Refine Search</h2>
              <p className="text-white/30 text-xs mb-8">Curate your architectural preference.</p>

              {/* Location */}
              <div className="mb-8">
                <label className="section-label block mb-3">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={e => { setLocation(e.target.value); setPage(1); }}
                    placeholder="Explore destinations..."
                    className="input-dark text-sm pr-10"
                  />
                  <MapPin size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30" />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-8">
                <label className="section-label block mb-3">Property Type</label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => toggleType(type)}
                      className={`px-4 py-1.5 text-xs border transition-all duration-200 ${
                        selectedTypes.includes(type)
                          ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]'
                          : 'border-white/15 text-white/50 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-8">
                <label className="section-label block mb-3">Budget Range</label>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={budget}
                  onChange={e => { setBudget(Number(e.target.value)); setPage(1); }}
                  className="w-full accent-[#C9A84C] cursor-pointer"
                />
                <div className="flex justify-between text-white/30 text-xs mt-2">
                  <span>$1M</span>
                  <span className="text-[#C9A84C]">${budget}M{budget >= 50 ? '+' : ''}</span>
                  <span>$50M+</span>
                </div>
              </div>

              {/* Beds & Baths */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="section-label block mb-2">Beds</label>
                  <select
                    value={beds}
                    onChange={e => { setBeds(e.target.value); setPage(1); }}
                    className="input-dark text-sm appearance-none cursor-pointer"
                  >
                    {bedOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2">Baths</label>
                  <select
                    value={baths}
                    onChange={e => { setBaths(e.target.value); setPage(1); }}
                    className="input-dark text-sm appearance-none cursor-pointer"
                  >
                    {bathOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <button
                onClick={resetFilters}
                className="w-full border border-white/15 text-white/50 text-xs py-3 tracking-widest uppercase hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Reset All Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="section-label mb-2">Discovery</p>
                <h1 className="font-serif text-4xl font-light text-white inline mr-4">Portfolio</h1>
                <span className="text-white/30 text-sm">{filtered.length} Properties</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/30 text-xs">
                  <span>SORT BY:</span>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="bg-transparent text-white text-xs border-none focus:outline-none cursor-pointer"
                  >
                    <option value="CURATED">CURATED</option>
                    <option value="PRICE: LOW">PRICE: LOW</option>
                    <option value="PRICE: HIGH">PRICE: HIGH</option>
                  </select>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setGridView(true)}
                    className={`p-2 ${gridView ? 'text-[#C9A84C]' : 'text-white/30 hover:text-white'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setGridView(false)}
                    className={`p-2 ${!gridView ? 'text-[#C9A84C]' : 'text-white/30 hover:text-white'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            {paginated.length === 0 ? (
              <div className="text-center py-24 text-white/30">
                <SlidersHorizontal size={32} className="mx-auto mb-4 opacity-30" />
                <p className="font-serif text-xl">No properties match your criteria</p>
                <button onClick={resetFilters} className="mt-4 text-[#C9A84C] text-sm hover:underline">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={gridView ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
                {paginated.map((property, i) => (
                  <PropertyListItem
                    key={property.id}
                    property={property}
                    gridView={gridView}
                    liked={likedIds.has(property.id)}
                    onLike={() => toggleLike(property.id)}
                    index={i}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 text-white/30 hover:text-white disabled:opacity-20 text-xs tracking-widest uppercase transition-colors"
                >
                  <ChevronLeft size={14} /> PREV
                </button>

                {[...Array(Math.min(totalPages, 3))].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 text-xs transition-all duration-200 ${
                        page === p
                          ? 'bg-[#C9A84C] text-black font-medium'
                          : 'text-white/40 hover:text-white border border-white/10 hover:border-white/30'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                {totalPages > 3 && (
                  <>
                    <span className="text-white/20">—</span>
                    <button
                      onClick={() => setPage(totalPages)}
                      className={`w-8 h-8 text-xs transition-all duration-200 ${
                        page === totalPages
                          ? 'bg-[#C9A84C] text-black font-medium'
                          : 'text-white/40 hover:text-white border border-white/10 hover:border-white/30'
                      }`}
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1 text-white/30 hover:text-white disabled:opacity-20 text-xs tracking-widest uppercase transition-colors"
                >
                  NEXT <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer
        offices={['London', 'New York', 'Tokyo', 'Dubai']}
      />
    </main>
  );
}

function PropertyListItem({
  property,
  gridView,
  liked,
  onLike,
  index,
}: {
  property: Property;
  gridView: boolean;
  liked: boolean;
  onLike: () => void;
  index: number;
}) {
  if (!gridView) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex gap-6 bg-[#111] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 group"
      >
        <Link to={`/properties/${property.id}`} className="flex gap-6 flex-1">
          <div className="w-48 h-36 flex-shrink-0 overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 p-5 flex flex-col justify-center">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl font-light text-white group-hover:text-[#C9A84C] transition-colors">
                  {property.name}
                </h3>
                <p className="text-white/40 text-sm mt-1">{property.location}</p>
              </div>
              <span className="text-[#C9A84C] text-lg">{property.priceFormatted}</span>
            </div>
            <div className="flex items-center gap-5 text-white/40 text-xs mt-4">
              <span className="flex items-center gap-1"><BedDouble size={12} /> {property.beds} BEDS</span>
              <span className="flex items-center gap-1"><Bath size={12} /> {property.baths} BATHS</span>
              <span className="flex items-center gap-1"><Maximize2 size={12} /> {property.sqft.toLocaleString()} SQFT</span>
            </div>
          </div>
        </Link>
        <div className="flex items-center pr-5">
          <button
            onClick={onLike}
            className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-[#C9A84C] transition-colors"
          >
            <Heart size={16} className={liked ? 'fill-[#C9A84C] text-[#C9A84C]' : ''} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group bg-[#111] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-300 cursor-pointer"
    >
      <Link to={`/properties/${property.id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {property.tag && (
            <div className="absolute top-3 left-3">
              <span className="bg-[#C9A84C] text-black text-xs font-medium px-2.5 py-1 uppercase tracking-wide">
                {property.tag}
              </span>
            </div>
          )}
          <button
            onClick={e => { e.preventDefault(); onLike(); }}
            className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <Heart size={13} className={liked ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-white'} />
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg font-light text-white leading-snug group-hover:text-[#C9A84C] transition-colors">
              {property.name}
            </h3>
            <span className="text-[#C9A84C] text-sm font-medium whitespace-nowrap">{property.priceFormatted}</span>
          </div>
          <p className="text-white/35 text-xs mb-4">{property.location}</p>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <span className="flex items-center gap-1"><BedDouble size={11} /> {property.beds} BEDS</span>
            <span className="flex items-center gap-1"><Bath size={11} /> {property.baths} BATHS</span>
            <span className="flex items-center gap-1"><Maximize2 size={11} /> {property.sqft.toLocaleString()} SQFT</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
