'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
      {['Home', 'Proyectos', 'Contacto'].map((label, index) => (
        <Link
          key={label}
          href={label === 'Home' ? '/' : `#${label.toLowerCase()}`}
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
          {label}
        </Link>
      ))}
    </div>
  )
}
