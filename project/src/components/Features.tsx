import React, { useEffect, useRef } from 'react';
import { Shield, Activity, BarChart, Zap, Eye, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={featureRef} 
      className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 opacity-0 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary-500/10"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="flex flex-col space-y-4">
        <div className="bg-primary-500/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-primary-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <Shield size={24} />,
      title: "Proactive Protection",
      description: "Detect network issues before they impact your operations with our predictive fault analysis.",
      delay: 0.1
    },
    {
      icon: <Activity size={24} />,
      title: "Real-time Monitoring",
      description: "Continuous network monitoring with instant alerts when potential issues are detected.",
      delay: 0.2
    },
    {
      icon: <BarChart size={24} />,
      title: "Comprehensive Analytics",
      description: "Detailed insights and reports to understand network performance and potential risks.",
      delay: 0.3
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Alerts",
      description: "Receive immediate notifications about detected or predicted network faults.",
      delay: 0.4
    },
    {
      icon: <Eye size={24} />,
      title: "Network Visibility",
      description: "Complete visibility into your network infrastructure and performance metrics.",
      delay: 0.5
    },
    {
      icon: <Clock size={24} />,
      title: "Reduced Downtime",
      description: "Minimize network downtime with early detection and rapid response capabilities.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Network Fault Detection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge technology ensures your network remains reliable and operational at all times.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;