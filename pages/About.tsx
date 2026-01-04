import React from 'react';
import { SectionHeader } from '../components/UI';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Intro */}
      <div className="container mx-auto px-6 mb-24">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-aurelia-gold text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-aurelia-navy mb-6">Hospitality Redefined</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2018, Aurelia Stays was born from a simple belief: that travel should be seamless, and property management should be effortless. We saw a gap in the market for a service that truly cared about the granular details of the guest experience while delivering robust financial returns for owners.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we manage a curated portfolio of over 150 properties, serving thousands of guests annually with the same dedication to quality and service that defined our very first listing.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-aurelia-gold/30 rounded-sm z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern Living Space" 
                className="relative z-10 rounded-sm shadow-xl w-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Team */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              eyebrow="Leadership" 
              title="Meet the Team" 
              description="A diverse group of hospitality experts, real estate strategists, and creative thinkers." 
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Eleanor Sterling", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976" },
              { name: "Marcus Thorne", role: "Head of Operations", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974" },
              { name: "Sarah Jenkins", role: "Guest Experience Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961" },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-sm mx-auto w-full max-w-sm aspect-[3/4]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-aurelia-navy/0 group-hover:bg-aurelia-navy/20 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl font-serif text-aurelia-navy">{member.name}</h3>
                <p className="text-aurelia-gold text-sm font-medium uppercase tracking-wide mt-1">{member.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;