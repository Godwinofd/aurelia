import React from 'react';
import { SectionHeader, Button } from '../components/UI';
import ScrollReveal from '../components/ScrollReveal';
import { CheckCircle2, BarChart3, Users, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Our Services"
            title="Comprehensive Management Solutions"
            description="Whether you're looking to boost yield or reduce workload, our tailored services cover every aspect of property management."
          />
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 mb-32">
          {[
            {
              title: "Marketing & Distribution",
              desc: "We list your property on 30+ premium platforms including Airbnb, Booking.com, and exclusive corporate portals.",
              icon: <Sparkles className="w-6 h-6 text-aurelia-gold" />
            },
            {
              title: "Revenue Management",
              desc: "Dynamic pricing algorithms adjust rates daily based on demand, seasonality, and local events to maximize yield.",
              icon: <BarChart3 className="w-6 h-6 text-aurelia-gold" />
            },
            {
              title: "Guest Vetting & Communication",
              desc: "24/7 guest support and rigorous screening processes ensure peace of mind and 5-star experiences.",
              icon: <Users className="w-6 h-6 text-aurelia-gold" />
            },
            {
              title: "Maintenance & Housekeeping",
              desc: "Professional cleaning between every stay and proactive maintenance to keep your asset in showroom condition.",
              icon: <CheckCircle2 className="w-6 h-6 text-aurelia-gold" />
            }
          ].map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="flex gap-6 p-6 rounded-lg hover:bg-slate-50 transition-colors duration-300">
              <div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-aurelia-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurelia-gold/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <ScrollReveal>
              <h3 className="text-3xl font-serif mb-12 text-center">How It Works</h3>
            </ScrollReveal>
            
            <div className="space-y-12">
              {[
                { step: "01", title: "Consultation", desc: "We visit your property, assess its potential, and provide a revenue forecast." },
                { step: "02", title: "Onboarding", desc: "Our design team stages the space, professional photos are taken, and listings go live." },
                { step: "03", title: "Hosting", desc: "We handle 100% of guest interactions, check-ins, and cleaning." },
                { step: "04", title: "Earning", desc: "Receive monthly performance reports and payouts directly to your account." },
              ].map((item, i) => (
                <ScrollReveal key={i} animation="slide-right" delay={i * 100} className="flex items-start md:items-center group">
                  <span className="text-4xl md:text-6xl font-serif text-white/20 font-bold mr-8 group-hover:text-aurelia-gold transition-colors duration-300">{item.step}</span>
                  <div className="border-b border-white/10 pb-8 w-full">
                    <h4 className="text-xl md:text-2xl font-medium mb-2">{item.title}</h4>
                    <p className="text-slate-400 max-w-xl">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal delay={200} className="mt-24 text-center bg-aurelia-gold/10 p-12 rounded-lg">
          <h3 className="text-2xl font-serif text-aurelia-navy mb-4">Ready to optimize your portfolio?</h3>
          <Button>Schedule a Call</Button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Services;