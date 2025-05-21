import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  networkSize: string;
  message: string;
}

const WaitingList: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    networkSize: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xovdbgpg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        company: formState.company,
        networkSize: formState.networkSize,
        message: formState.message,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        networkSize: "",
        message: "",
      });
    } else {
      console.error("Submission failed.");
    }
  } catch (err) {
    console.error("Form error:", err);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="waiting-list" className="py-20 bg-dark-900 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Waiting List
            </h2>
            <p className="text-xl text-gray-400">
              Be among the first to experience the future of network fault detection.
            </p>
          </div>
          
          <div 
            ref={formRef}
            className="bg-dark-800 rounded-xl p-8 border border-dark-700 shadow-xl opacity-0"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="networkSize" className="block text-sm font-medium text-gray-300 mb-1">
                      Network Size
                    </label>
                    <select
                      id="networkSize"
                      name="networkSize"
                      value={formState.networkSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    >
                      <option value="" disabled>Select size...</option>
                      <option value="small">Small (1-50 devices)</option>
                      <option value="medium">Medium (51-200 devices)</option>
                      <option value="large">Large (201-1000 devices)</option>
                      <option value="enterprise">Enterprise (1000+ devices)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white resize-none"
                    placeholder="Tell us about your specific network challenges..."
                  />
                </div>
                
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Join Waiting List'
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for joining our waiting list. We'll be in touch soon with exclusive updates about NAVNET.
                </p>
                <Button 
                  variant="outline" 
                  size="md"
                  onClick={() => setIsSubmitted(false)}
                >
                  Join with another email
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;