import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  connections: number[];
  alpha: number;
}

const NetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    particles.current = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        connections: [],
        alpha: Math.random() * 0.5 + 0.5
      });
    }

    // Connect nearby particles (simplified graph algorithm)
    for (let i = 0; i < particles.current.length; i++) {
      const connections = [];
      // Each particle connects to 2-4 other particles
      const connectionCount = Math.floor(Math.random() * 3) + 2; 
      
      for (let c = 0; c < connectionCount; c++) {
        // Connect to a random particle that isn't itself
        let target;
        do {
          target = Math.floor(Math.random() * particles.current.length);
        } while (target === i || connections.includes(target));
        
        connections.push(target);
      }
      
      particles.current[i].connections = connections;
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i];
      
      // Update position
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 216, 255, ${p.alpha * 0.7})`;
      ctx.fill();
      
      // Draw connections
      for (const connectionIndex of p.connections) {
        const target = particles.current[connectionIndex];
        
        // Calculate distance
        const dx = p.x - target.x;
        const dy = p.y - target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw connections within a certain distance
        const maxDistance = 200;
        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = Math.max(0, (maxDistance - distance) / maxDistance) * 0.5 * p.alpha;
          
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(110, 86, 207, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initializeCanvas();
    animate();

    const handleResize = () => {
      initializeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

export default NetworkAnimation;