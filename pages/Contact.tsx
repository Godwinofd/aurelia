import React from 'react';
import { SectionHeader, Button } from '../components/UI';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import InteractiveMap from '../components/InteractiveMap';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 mb-24">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Start Your Journey"
            description="Whether you're a landlord looking for management or a guest planning your next trip, we'd love to hear from you."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal animation="slide-right">
            <div className="bg-slate-50 p-10 rounded-sm border border-slate-100 h-full">
              <h3 className="text-2xl font-serif text-aurelia-navy mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white text-aurelia-gold shadow-sm flex items-center justify-center shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-1">Email</p>
                    <a href="mailto:hello@aurelia.com" className="text-lg text-aurelia-navy hover:text-aurelia-gold transition-colors">hello@aurelia-stays.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white text-aurelia-gold shadow-sm flex items-center justify-center shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-1">Phone</p>
                    <a href="tel:+442012345678" className="text-lg text-aurelia-navy hover:text-aurelia-gold transition-colors">+44 (0) 20 1234 5678</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white text-aurelia-gold shadow-sm flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-1">Office</p>
                    <p className="text-lg text-aurelia-navy">12 Kensington High St,<br />London, W8 4PT</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-sm border border-slate-100">
                <p className="text-slate-600 text-sm">
                  "Aurelia transformed my property investment. Professional, transparent, and significantly higher returns than long-term letting."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                  <p className="ml-3 text-sm font-medium text-aurelia-navy">James C., Property Owner</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={200}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-aurelia-navy focus:ring-1 focus:ring-aurelia-navy transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-aurelia-navy focus:ring-1 focus:ring-aurelia-navy transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-aurelia-navy focus:ring-1 focus:ring-aurelia-navy transition-all" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">I am a...</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-aurelia-navy focus:ring-1 focus:ring-aurelia-navy transition-all">
                  <option>Guest looking to book</option>
                  <option>Landlord with a property</option>
                  <option>Investor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-aurelia-navy focus:ring-1 focus:ring-aurelia-navy transition-all" placeholder="Tell us about your needs..."></textarea>
              </div>

              <Button className="w-full" icon>Send Enquiry</Button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Interactive Map */}
      <ScrollReveal delay={300} className="h-96 w-full">
        <InteractiveMap className="h-full w-full" />
      </ScrollReveal>
    </div>
  );
};

export default Contact;