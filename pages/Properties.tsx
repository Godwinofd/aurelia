import React, { useState } from 'react';
import { SectionHeader } from '../components/UI';
import ScrollReveal from '../components/ScrollReveal';
import { MapPin, Bed, Users, Heart, ArrowUpRight, Bath } from 'lucide-react';
import { Property } from '../types';

// Mock Data with specific real estate images
const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Kensington Loft',
    location: 'London, UK',
    price: '£250',
    guests: 4,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974', // Modern London style
    tags: ['Luxury', 'City Center']
  },
  {
    id: '2',
    title: 'Azure Penthouse',
    location: 'Dubai, UAE',
    price: '£450',
    guests: 6,
    bedrooms: 3,
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=2070', // Dubai luxury modern interior
    tags: ['Pool', 'Skyline View']
  },
  {
    id: '3',
    title: 'Sanctuary Villa',
    location: 'Bali, Indonesia',
    price: '£180',
    guests: 2,
    bedrooms: 1,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=2070', // Bali tropical pool
    tags: ['Nature', 'Private Pool']
  },
  {
    id: '4',
    title: 'Highline Suite',
    location: 'New York, USA',
    price: '£320',
    guests: 2,
    bedrooms: 1,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070', // NYC Apartment
    tags: ['City View', 'Modern']
  },
  {
    id: '5',
    title: 'Nordic Haven',
    location: 'Copenhagen, Denmark',
    price: '£210',
    guests: 4,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2070', // Scandi Minimalist
    tags: ['Design', 'Quiet']
  },
  {
    id: '6',
    title: 'Coastal Retreat',
    location: 'Cornwall, UK',
    price: '£280',
    guests: 8,
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2070', // Beach house
    tags: ['Beachfront', 'Family']
  },
];

const Properties: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'London', 'Dubai', 'New York', 'Bali'];

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.location.includes(filter));

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Portfolio"
            title="Curated Residences"
            description="Explore our exclusive collection of hand-picked properties in the world's most desirable locations."
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={100} className="flex flex-wrap gap-2 justify-center mb-16">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 border ${
                filter === f 
                  ? 'bg-aurelia-navy border-aurelia-navy text-white shadow-lg transform -translate-y-1' 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-aurelia-gold hover:text-aurelia-navy'
              }`}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((prop, idx) => (
            <ScrollReveal key={prop.id} delay={idx * 100}>
              <div className="group bg-white rounded-sm overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer flex flex-col h-full relative border border-slate-100/50">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {prop.tags.map((tag, i) => (
                      <span key={i} className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-aurelia-navy shadow-sm rounded-sm border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Reveal on Hover) */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out">
                     <button className="w-10 h-10 rounded-full bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center shadow-lg transition-colors">
                        <Heart size={18} className="transition-transform active:scale-90" />
                     </button>
                  </div>

                  {/* View Details Button (Bottom Overlay) */}
                  <div className="absolute bottom-6 left-0 right-0 text-center z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                     <span className="inline-flex items-center text-white font-medium text-sm border-b border-aurelia-gold pb-1">
                        View Residence <ArrowUpRight size={16} className="ml-2" />
                     </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-20 group-hover:z-0">
                  <div className="flex items-center text-aurelia-gold text-xs font-bold uppercase tracking-widest mb-3">
                    <MapPin size={12} className="mr-2" />
                    {prop.location}
                  </div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-serif text-aurelia-navy group-hover:text-aurelia-gold transition-colors duration-300 leading-tight">
                      {prop.title}
                    </h3>
                  </div>
                  
                  {/* Divider line that expands on hover */}
                  <div className="w-12 h-[1px] bg-slate-200 mb-6 group-hover:w-full group-hover:bg-aurelia-gold/30 transition-all duration-700"></div>
                  
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex gap-4 text-slate-500 text-xs font-semibold uppercase tracking-wide">
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-sm">
                        <Users size={14} className="text-slate-400" /> 
                        <span>{prop.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-sm">
                        <Bed size={14} className="text-slate-400" /> 
                        <span>{prop.bedrooms} Bed</span>
                      </div>
                    </div>

                    <div className="text-right">
                       <span className="block text-2xl font-serif text-aurelia-navy font-medium">{prop.price}</span>
                       <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Per Night</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Load More Trigger */}
        <ScrollReveal delay={400} className="mt-20 text-center">
            <button className="text-aurelia-navy font-medium text-sm tracking-widest uppercase border-b border-slate-300 pb-1 hover:border-aurelia-gold hover:text-aurelia-gold transition-colors">
                Load More Residences
            </button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Properties;