// src/components/Hero.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F0F0F',
        color: '#F5F5F5',
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      <h1
        className="hero-title"
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '1rem',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        SebRVV
      </h1>
      <p
        className="hero-subtitle"
        style={{
          fontSize: '1.5rem',
          fontWeight: 300,
          marginBottom: '2rem',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Portafolio de proyectos destacados
      </p>
      <a
        href="#projects"
        className="hero-cta"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#00D1FF',
          color: '#0F0F0F',
          borderRadius: '999px',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00B0CC')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00D1FF')}
      >
        Ver proyectos
      </a>
    </section>
  );
}
