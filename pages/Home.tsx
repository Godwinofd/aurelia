import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Button, SectionHeader } from '../components/UI';
import { Star, Key, ShieldCheck, Heart, ArrowUpRight, Building2 } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
            alt="Luxury Penthouse Interior" 
            className="w-full h-full object-cover animate-scale-in"
          />
          {/* Enhanced Overlay for Maximum Readability */}
          <div className="absolute inset-0 bg-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-16">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-hero-fade-in-up [animation-delay:200ms]">
            <div className="h-[1px] w-8 md:w-16 bg-aurelia-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            <span className="text-aurelia-gold tracking-[0.25em] text-xs md:text-sm font-bold uppercase drop-shadow-md">
              Refined Living
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-aurelia-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl opacity-0 animate-hero-fade-in-up [animation-delay:500ms]">
            Curating the <br className="hidden md:block" />
            <span className="italic font-light text-aurelia-goldLight">Art of</span> Living
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-100/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg opacity-0 animate-hero-fade-in-up [animation-delay:800ms]">
            Aurelia Stays provides a seamless bridge between premium property ownership and extraordinary guest experiences in the world's most desirable locations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 opacity-0 animate-hero-fade-in-up [animation-delay:1100ms]">
            <Button 
              onClick={() => setPage('properties')} 
              className="bg-aurelia-gold text-aurelia-navy hover:bg-white border-2 border-aurelia-gold hover:border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full sm:w-auto min-w-[180px]"
            >
              View Collection
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setPage('contact')} 
              className="border-white text-white hover:bg-white hover:text-aurelia-navy backdrop-blur-sm bg-white/5 hover:border-white w-full sm:w-auto min-w-[180px]"
            >
              Partner With Us
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden md:flex flex-col items-center gap-2 opacity-0 animate-fade-in [animation-delay:2000ms]">
           <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 via-white to-transparent"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              eyebrow="Our Expertise" 
              title="Redefining Property Management" 
              description="We offer a holistic approach to property management, ensuring landlords maximize returns while guests enjoy unforgettable stays."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                icon: <Key className="w-8 h-8" />, 
                title: "Full-Service Management", 
                desc: "End-to-end handling of your property, from marketing to maintenance." 
              },
              { 
                icon: <Star className="w-8 h-8" />, 
                title: "Premium Guest Experience", 
                desc: "Concierge-level support, 5-star amenities, and seamless check-ins." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Asset Protection", 
                desc: "Rigorous vetting, comprehensive insurance, and regular inspections." 
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 150} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all duration-500 rounded-sm">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-aurelia-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-aurelia-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-aurelia-navy opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowUpRight size={16} className="ml-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties (Carousel Concept) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-xl">
                <span className="text-aurelia-gold text-xs font-bold tracking-widest uppercase">The Collection</span>
                <h2 className="text-4xl md:text-5xl font-serif mt-3">Featured Residences</h2>
              </div>
              <Button variant="outline" onClick={() => setPage('properties')} className="hidden md:inline-flex border-slate-700 text-white hover:border-white">
                View All
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
              {[
                { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974", title: "The Kensington Loft", loc: "London, UK" },
                { img: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=2070", title: "Azure Penthouse", loc: "Dubai, UAE" },
                { img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=2070", title: "Sanctuary Villa", loc: "Bali, Indonesia" },
                { img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070", title: "Highline Suite", loc: "New York, USA" },
              ].map((prop, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-start relative group cursor-pointer overflow-hidden rounded-sm">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-aurelia-gold text-sm font-medium mb-1">{prop.loc}</p>
                    <h3 className="text-2xl font-serif text-white">{prop.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <div className="mt-8 md:hidden text-center">
            <ScrollReveal delay={300}>
              <Button variant="outline" onClick={() => setPage('properties')} className="border-slate-700 text-white">View All</Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-aurelia-gold/10 border-b border-aurelia-gold/20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Properties Managed", value: "150+" },
            { label: "Guest Reviews", value: "4.9/5" },
            { label: "Years Experience", value: "12" },
            { label: "Cities", value: "8" }
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100} animation="fade-up">
              <h4 className="text-4xl md:text-5xl font-serif text-aurelia-navy font-semibold mb-2">{stat.value}</h4>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Split */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        <ScrollReveal className="relative group overflow-hidden h-[400px] md:h-auto" delay={0}>
          <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Guests" />
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-12">
            <Heart className="text-white w-12 h-12 mb-6" />
            <h3 className="text-3xl font-serif text-white mb-4">For Guests</h3>
            <p className="text-slate-200 mb-8 max-w-sm">Discover hand-picked homes designed for comfort, style, and authentic local living.</p>
            <Button onClick={() => setPage('properties')} className="!bg-white !text-slate-900 hover:!bg-aurelia-gold hover:!text-white border-none min-w-[160px]">Book Your Stay</Button>
          </div>
        </ScrollReveal>
        <ScrollReveal className="relative group overflow-hidden h-[400px] md:h-auto" delay={200}>
          <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2070" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Landlords" />
          <div className="absolute inset-0 bg-aurelia-navy/80 group-hover:bg-aurelia-navy/70 transition-colors duration-500 flex flex-col items-center justify-center text-center p-12">
            <Building2 className="text-aurelia-gold w-12 h-12 mb-6" />
            <h3 className="text-3xl font-serif text-white mb-4">For Landlords</h3>
            <p className="text-slate-200 mb-8 max-w-sm">Unlock the potential of your property with our comprehensive management solutions.</p>
            <Button onClick={() => setPage('contact')} className="!bg-aurelia-gold !text-white hover:!bg-white hover:!text-aurelia-navy border-none min-w-[160px]">List Property</Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;