import React, { useEffect, useRef } from 'react';
import { Network, AlertCircle, PieChart, Bell } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-right');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef} 
      className="flex items-start opacity-0"
    >
      <div className="flex-shrink-0 bg-primary-500 text-dark-900 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-primary-500">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How NAVNET Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NavNet's advanced system uses AI and machine learning to keep your network running smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          <div className="space-y-12">
            <Step 
              number={1} 
              title="Network Monitoring" 
              description="NAVNET continuously monitors your network traffic, performance metrics, and infrastructure health in real-time."
              icon={<Network size={20} />}
            />
            <Step 
              number={2} 
              title="Fault Pattern Recognition" 
              description="Our AI algorithms analyze network behavior to identify patterns that indicate potential future faults."
              icon={<AlertCircle size={20} />}
            />
          </div>
          <div className="space-y-12">
            <Step 
              number={3} 
              title="Predictive Analysis" 
              description="Using historical data and machine learning, NAVNET predicts potential network issues before they occur."
              icon={<PieChart size={20} />}
            />
            <Step 
              number={4} 
              title="Alert & Remediation" 
              description="When a potential fault is detected, NAVNET sends immediate alerts and suggests remediation steps."
              icon={<Bell size={20} />}
            />
          </div>
        </div>
        
        {/* <div className="mt-20 bg-dark-900 rounded-xl p-8 border border-dark-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h4 className="text-5xl font-bold text-primary-500 mb-2">45%</h4>
              <p className="text-gray-300">Reduction in Network Downtime</p>
            </div>
            <div className="p-4">
              <h4 className="text-5xl font-bold text-primary-500 mb-2">2.5x</h4>
              <p className="text-gray-300">Faster Problem Resolution</p>
            </div>
            <div className="p-4">
              <h4 className="text-5xl font-bold text-primary-500 mb-2">68%</h4>
              <p className="text-gray-300">More Efficient IT Operations</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;