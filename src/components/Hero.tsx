import React, { useEffect, useRef } from 'react';
import Button from './Button';
import NetworkAnimation from './NetworkAnimation';

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900 z-0"></div>
      <div className="absolute inset-0 z-10">
        <NetworkAnimation />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Detect Network Faults
            </span>{' '}
            <span className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Before They <span className="text-primary-500">Impact</span> You
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            NAVNET uses advanced AI algorithms to predict and detect network faults 
            before they can disrupt your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn How It Works
            </Button>
          </div>
          
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0"
          >
            <div className="bg-dark-800/60 backdrop-blur-sm p-6 rounded-xl border border-dark-700 transform transition-all hover:scale-105 hover:border-primary-500/50">
              <h3 className="text-5xl font-bold text-primary-500 mb-2">99.9%</h3>
              <p className="text-gray-300">Fault Detection Accuracy</p>
            </div>
            <div className="bg-dark-800/60 backdrop-blur-sm p-6 rounded-xl border border-dark-700 transform transition-all hover:scale-105 hover:border-primary-500/50">
              <h3 className="text-5xl font-bold text-primary-500 mb-2">73%</h3>
              <p className="text-gray-300">Faster Response Time</p>
            </div>
            <div className="bg-dark-800/60 backdrop-blur-sm p-6 rounded-xl border border-dark-700 transform transition-all hover:scale-105 hover:border-primary-500/50">
              <h3 className="text-5xl font-bold text-primary-500 mb-2">24/7</h3>
              <p className="text-gray-300">Real-time Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;