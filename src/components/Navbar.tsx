'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

export default function Navbar() {
  const t = useTranslations('navbar')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const router = useRouter()
  const { locale, asPath } = router
  const otherLocale = locale === 'es' ? 'en' : 'es'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    router.push(asPath, asPath, { locale: otherLocale })
  }

  const links = [
    { label: t('home'), href: '/' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ]

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <div
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(22, 22, 22, 0.6)',
          border: '1px solid #2D2D2D',
          borderRadius: '999px',
          padding: '0.75rem 2.5rem',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 4px 12px rgba(0, 0, 0, 0.4)'
            : '0 0 8px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          gap: '2.5rem',
          zIndex: 999,
          transition: 'all 0.3s ease',
        }}
      >
        {links.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            locale={locale}
            style={{
              cursor: 'pointer',
              color: hoveredIndex === index ? '#6EC1E4' : '#F0F0F0',
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              fontWeight: 400,
              transition: 'color 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.label}
          </Link>
        ))}
      </div>

{/* SELECTOR DE IDIOMA SEPARADO */}
<div
  style={{
    position: 'fixed',
    top: '1.5rem',
    right: '2rem',
    backgroundColor: 'rgba(22, 22, 22, 0.7)',
    border: '1px solid #2D2D2D',
    borderRadius: '999px',
    padding: '0.5rem 1rem',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 999,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }}
>
  <button
    onClick={toggleLanguage}
    style={{
      background: 'transparent',
      border: 'none',
      color: '#F0F0F0',
      fontSize: '0.85rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = '#6EC1E4')}
    onMouseLeave={(e) => (e.currentTarget.style.color = '#F0F0F0')}
  >
    <span style={{ fontSize: '1rem' }}>
      {otherLocale === 'en' ? '🇬🇧' : '🇪🇸'}
    </span>
    {otherLocale.toUpperCase()}
  </button>
</div>

    </>
  )
}
