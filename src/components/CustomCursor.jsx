import React, { useEffect, useState } from 'react';

const sectionCursorConfigs = {
  hero: { color: '#000000', ringColor: 'rgba(0, 0, 0, 0.4)', glowColor: 'rgba(0, 0, 0, 0.15)' },
  about: { color: '#10B981', ringColor: 'rgba(16, 185, 129, 0.6)', glowColor: 'rgba(16, 185, 129, 0.2)' },
  experience: { color: '#3B82F6', ringColor: 'rgba(59, 130, 246, 0.6)', glowColor: 'rgba(59, 130, 246, 0.2)' },
  services: { color: '#F59E0B', ringColor: 'rgba(245, 158, 11, 0.6)', glowColor: 'rgba(245, 158, 11, 0.2)' },
  skills: { color: '#8B5CF6', ringColor: 'rgba(139, 92, 246, 0.6)', glowColor: 'rgba(139, 92, 246, 0.2)' },
  projects: { color: '#10B981', ringColor: 'rgba(16, 185, 129, 0.6)', glowColor: 'rgba(16, 185, 129, 0.2)' },
  workflow: { color: '#10B981', ringColor: 'rgba(16, 185, 129, 0.6)', glowColor: 'rgba(16, 185, 129, 0.2)' },
  faq: { color: '#EC4899', ringColor: 'rgba(236, 72, 153, 0.6)', glowColor: 'rgba(236, 72, 153, 0.2)' },
  contact: { color: '#FFFFFF', ringColor: 'rgba(255, 255, 255, 0.7)', glowColor: 'rgba(255, 255, 255, 0.25)' },
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);

      // Detect active section under cursor
      const sections = ['hero', 'about', 'experience', 'services', 'skills', 'projects', 'workflow', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (mouseY >= rect.top && mouseY <= rect.bottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animId;
    const updateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(updateRing);
    };
    animId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  useEffect(() => {
    const handleMouseEnterInteractive = () => {
      setIsHovered(true);
    };
    const handleMouseLeaveInteractive = () => {
      setIsHovered(false);
    };

    const attachListeners = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, [role="button"], .design-card-wrap, .project-card-wrap, .service-card-wrap, .skill-card-wrap, .hover-scale-card');
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    attachListeners();
    const timer = setInterval(attachListeners, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentConfig = sectionCursorConfigs[activeSection] || sectionCursorConfigs.hero;

  return (
    <>
      {/* Central Sharp Precision Cursor Dot */}
      <div
        id="custom-cursor-dot"
        className="hidden md:block shadow-xs pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? currentConfig.color : currentConfig.color,
          transition: 'transform 0.2s ease, opacity 0.3s ease, background-color 0.2s ease',
        }}
      />

      {/* Sleek Minimalist Ring */}
      <div
        id="custom-cursor-ring"
        className="hidden md:block pointer-events-none rounded-full"
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
          width: isHovered ? '46px' : '28px',
          height: isHovered ? '46px' : '28px',
          borderColor: currentConfig.ringColor,
          borderWidth: isHovered ? '2px' : '1.5px',
          backgroundColor: isHovered ? currentConfig.glowColor : 'transparent',
          boxShadow: isHovered ? `0 0 20px ${currentConfig.glowColor}` : 'none',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      />
    </>
  );
}

