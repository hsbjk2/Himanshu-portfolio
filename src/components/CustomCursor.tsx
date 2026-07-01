import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports hover interactions (desktop only)
    const mediaQuery = window.matchMedia('(any-hover: hover)');
    setIsMobile(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Listen to hovering state on interactive items
    const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (
    target.closest('a') ||
    target.closest('button') ||
    target.closest('[role="button"]') ||
    target.closest('.cursor-hover')
  ) {
    setIsHovered(true);
  } else {
    setIsHovered(false);
  }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    // Apply global body class to hide native cursor
    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  // Update trailing element smoothly with continuous lerping
  useEffect(() => {
    if (isMobile || !isVisible) return;

    const animateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust this factor to change lag (lower is slower/springier)
        const lagFactor = 0.16; 
        return {
          x: prev.x + dx * lagFactor,
          y: prev.y + dy * lagFactor,
        };
      });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div id="custom-cursor-wrapper" className="hidden lg:block">
      {/* Outer soft circle that trails */}
      <div
        id="cursor-outer-trail"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-all duration-150 border ease-out ${
          isHovered
            ? 'w-12 h-12 border-brand-cyan bg-brand-cyan/10 blur-[1px]'
            : 'border-brand-purple/40 bg-brand-purple/5'
        }`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />

      {/* Inner sharp pointer dot */}
      <div
        id="cursor-inner-dot"
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-100 ease-out ${
          isHovered ? 'scale-150 bg-brand-cyan' : 'bg-brand-purple'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
