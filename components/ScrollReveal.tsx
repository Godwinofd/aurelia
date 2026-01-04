import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-right';
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = 'fade-up',
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8'; // Initial state
    
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up opacity-100 translate-y-0';
      case 'fade-in':
        return 'animate-fade-in opacity-100';
      case 'slide-right':
        return 'animate-slide-in-right opacity-100 translate-x-0';
      default:
        return 'animate-fade-in-up opacity-100';
    }
  };

  const style = {
    animationDelay: `${delay}ms`,
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${getAnimationClass()}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;