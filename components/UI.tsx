import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}> = ({ children, variant = 'primary', onClick, className = '', icon = false }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurelia-gold";
  
  const variants = {
    primary: "bg-aurelia-navy text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "border border-slate-300 text-slate-800 hover:border-aurelia-navy hover:text-aurelia-navy hover:bg-slate-50",
    ghost: "text-aurelia-navy hover:text-aurelia-gold p-0 bg-transparent hover:bg-transparent shadow-none justify-start"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className} group`}>
      {children}
      {icon && <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

export const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ eyebrow, title, description, align = 'center', light = false }) => {
  return (
    <div className={`max-w-3xl mb-16 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className={`block text-xs font-bold tracking-widest uppercase mb-3 ${light ? 'text-aurelia-gold' : 'text-aurelia-gold'}`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl md:text-5xl font-serif font-medium mb-6 ${light ? 'text-white' : 'text-aurelia-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
