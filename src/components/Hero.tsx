import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'

const roles = ['Data Engineer', 'Developer', 'Programmer','Sebastian Rojas']

export default function Hero() {
  const t = useTranslations('hero')
  const heroRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // Animación de cambio de rol
  useEffect(() => {
    const interval = setInterval(() => {
      if (!roleRef.current) return
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          gsap.fromTo(
            roleRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          )
        },
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Animaciones iniciales
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-heading', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.hero-description', {
        opacity: 0,
        x: -30,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out',
      })
      gsap.from('.hero-button', {
        opacity: 0,
        y: 20,
        delay: 0.6,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.from('.hero-visual', {
        opacity: 0,
        scale: 0.9,
        delay: 0.4,
        duration: 1.2,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        background: 'linear-gradient(135deg, #0F0F1F, #101820)',
        color: '#F0F4F8',
        minHeight: '100vh',
        padding: '4rem 5vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Space Grotesk', sans-serif",
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1400px',
          gap: '4rem',
        }}
      >
        {/* Texto */}
        <div className="hero-text" style={{ flex: 1, minWidth: '300px' }}>
          <h1
            className="hero-heading"
            style={{
              fontSize: '3.75rem',
              fontWeight: 700,
              marginBottom: '1.2rem',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t('intro')} <span ref={roleRef}>{roles[roleIndex]}</span>
          </h1>

          <p
            className="hero-description"
            style={{
              fontSize: '1.3rem',
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: '2rem',
              color: '#D3D6DA',
              maxWidth: '650px',
            }}
          >
            {t('description')}
          </p>

          <a
            href="#projects"
            className="hero-button"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#00D1FF',
              color: '#0F0F0F',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(0, 209, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00B8E0'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 209, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00D1FF'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 209, 255, 0.3)'
            }}
          >
            {t('button')}
          </a>
        </div>

        {/* Visual */}
        <div
          className="hero-visual"
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
              maxWidth: '440px',
              height: '440px',
              borderRadius: '20px',
              background:
                'radial-gradient(circle at center, rgba(0,209,255,0.15), rgba(0,0,0,0))',
              boxShadow: '0 0 140px rgba(0,209,255,0.1), inset 0 0 40px rgba(0,209,255,0.2)',
              backdropFilter: 'blur(3px)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
