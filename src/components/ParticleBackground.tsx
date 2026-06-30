import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  isDarkMode: boolean;
}

export default function ParticleBackground({ isDarkMode }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow speed for clean premium feel
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = isDarkMode 
          ? 'rgba(168, 85, 247, 0.45)' // Purple particles
          : 'rgba(99, 102, 241, 0.35)'; // Indigo particles
        context.fill();
      }
    }

    // Initialize particles array (lower count on mobile for optimization)
    const particleCount = width < 768 ? 40 : 100;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interactive tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120, // Interaction radius
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      const gridSize = 60;
      ctx.strokeStyle = isDarkMode 
        ? 'rgba(255, 255, 255, 0.015)' 
        : 'rgba(0, 0, 0, 0.015)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          // Draw connection if particles are close
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = isDarkMode
              ? `rgba(6, 182, 212, ${alpha})` // Cyan lines in dark mode
              : `rgba(99, 102, 241, ${alpha})`; // Indigo lines in light mode
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw mouse connections
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.25;
          ctx.strokeStyle = isDarkMode
            ? `rgba(168, 85, 247, ${alpha})` // Purple links to mouse
            : `rgba(6, 182, 212, ${alpha})`; // Cyan links to mouse
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed inset-0 -z-10 pointer-events-none block"
    />
  );
}
