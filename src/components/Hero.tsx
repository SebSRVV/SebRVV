import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'

const roles = ['Data Engineer', 'Developer', 'Programmer', 'Sebastian Rojas']

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

  // Animaciones de entrada
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

          {/* Botón principal */}
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
              marginBottom: '1.5rem',
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

          {/* Redes sociales */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sebrvv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.4rem',
                borderRadius: '999px',
                backgroundColor: '#0A66C2',
                color: '#fff',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#004182')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0A66C2')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.487 
                         15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 
                         12.248V6.169H2.542v7.225h2.401zm-1.2-8.213c.837 
                         0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 
                         0-1.358.539-1.358 1.248 0 .694.52 1.248 
                         1.327 1.248h.015zm4.908 
                         8.213V9.359c0-.216.016-.432.08-.586.175-.432.574-.88 
                         1.244-.88.878 0 1.229.664 1.229 1.637v3.864h2.401V9.25c0-2.221-1.184-3.253-2.764-3.253-1.274 
                         0-1.845.707-2.165 1.203h.03V6.169H7.452c.03.694 
                         0 7.225 0 7.225h2.4z" />
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sebsrvv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.4rem',
                borderRadius: '999px',
                backgroundColor: '#1f1f1f',
                color: '#fff',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
                border: '1px solid #333',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1f1f1f')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 
                         7.7.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.48-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01 
                         1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.91-3.64-4.03 
                         0-.89.31-1.61.82-2.17-.08-.2-.36-1.02.08-2.13 0 0 
                         .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.05 
                         2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 
                         1.28.82 2.17 0 3.13-1.87 3.83-3.65 
                         4.03.29.24.54.73.54 1.48 0 1.07-.01 
                         1.93-.01 2.2 0 .21.15.46.55.38C13.71 
                         14.76 16 11.72 16 8.13 16 3.64 12.42 0 8 0z" />
              </svg>
              GitHub
            </a>
          </div>
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
