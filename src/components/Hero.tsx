import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const roles = ['Engineer', 'Developer', 'Creative Technologist', 'Cloud Architect']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const roleRef = useRef<HTMLSpanElement>(null)

  // Cambiar de rol animado
  useEffect(() => {
    const interval = setInterval(() => {
      if (!roleRef.current) return
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: 'power1.out',
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          gsap.fromTo(
            roleRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power1.out' }
          )
        },
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Animación inicial
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text h1', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      })
      gsap.from('.hero-text p', {
        opacity: 0,
        y: 30,
        delay: 0.4,
        duration: 1,
        ease: 'power2.out',
      })
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.from('.hero-right', {
        opacity: 0,
        scale: 0.95,
        delay: 0.6,
        duration: 1,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        backgroundColor: '#0F0F0F',
        color: '#F5F5F5',
        padding: '8rem 4rem 6rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '4rem',
        fontFamily: "'Space Grotesk', sans-serif",
        flexWrap: 'wrap',
      }}
    >
      <div className="hero-text" style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
        <h1
          style={{
            fontSize: '3.75rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          I am <span ref={roleRef}>{roles[roleIndex]}</span>
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: '2rem',
            color: '#D0D0D0',
          }}
        >
          Desarrollo soluciones modernas y escalables usando tecnologías como TypeScript, React,
          Node.js, Python, C++, Azure y bases de datos como MySQL. Me apasiona crear experiencias
          digitales elegantes, accesibles y con excelente rendimiento.
        </p>
        <a
          href="#projects"
          className="hero-cta"
          style={{
            display: 'inline-block',
            padding: '0.9rem 1.8rem',
            backgroundColor: '#00D1FF',
            color: '#0F0F0F',
            borderRadius: '999px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00B0CC')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00D1FF')}
        >
          Ver proyectos
        </a>
      </div>

      <div
        className="hero-right"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '280px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '420px',
            height: '420px',
            borderRadius: '20px',
            background: 'radial-gradient(circle at center, #00D1FF22, #00000000)',
            boxShadow: '0 0 120px #00d1ff15',
          }}
        />
      </div>
    </section>
  )
}
