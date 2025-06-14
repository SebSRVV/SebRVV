import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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
      {/* NAVBAR: contenedor centrado */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: 'fixed',
          top: '1.2rem',
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 999,
        }}
      >
        {/* “Píldora” con fondo, blur y bordes redondeados */}
        <div
          style={{
            background: 'rgba(22, 22, 22, 0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid #2D2D2D',
            borderRadius: '999px',
            padding: '0.6rem 1.6rem',
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: scrolled
              ? '0 8px 20px rgba(0,0,0,0.35)'
              : '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'box-shadow 0.4s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <Link
                href={link.href}
                locale={locale}
                style={{
                  color: hoveredIndex === index ? '#6EC1E4' : '#F0F0F0',
                  fontSize: '0.95rem',
                  letterSpacing: '0.04em',
                  fontWeight: 400,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* LANG TOGGLE (se puede dejar igual) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
        style={{
          position: 'fixed',
          top: '1.2rem',
          right: '1.2rem',
          backgroundColor: 'rgba(22, 22, 22, 0.7)',
          border: '1px solid #2D2D2D',
          borderRadius: '999px',
          padding: '0.5rem 1rem',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 999,
        }}
      >
        <motion.button
          whileHover={{ scale: 1.07, color: '#6EC1E4' }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#F0F0F0',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ fontSize: '1rem' }}>
            {otherLocale === 'en' ? '🇬🇧' : '🇪🇸'}
          </span>
          {otherLocale.toUpperCase()}
        </motion.button>
      </motion.div>
    </>
  )
}
