import React from 'react';
import { Building2, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Page } from '../types';

const Footer: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  return (
    <footer className="bg-aurelia-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white/10 p-2 rounded-sm text-white">
                <Building2 size={24} strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-serif font-bold">Aurelia</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Setting a new standard for serviced accommodation and property management.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-aurelia-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setPage('about')} className="text-slate-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setPage('services')} className="text-slate-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => setPage('properties')} className="text-slate-400 hover:text-white transition-colors">Portfolio</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setPage('contact')} className="text-slate-400 hover:text-white transition-colors">Contact Us</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Owner Login</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Guest Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Subscribe for market insights and exclusive offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-aurelia-gold transition-colors rounded-sm"
              />
              <button className="bg-aurelia-gold text-aurelia-navy px-4 py-2 text-sm font-medium rounded-sm hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aurelia Stays & Management. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;