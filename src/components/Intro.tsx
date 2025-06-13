import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const introRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: onFinish })

      // Fade-in de ambas palabras (rápido)
      tl.fromTo(
        ['.intro-sebrvv', '.intro-portafolio'],
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }
      )

      // Fade-out en secuencia tipo ola
      tl.to('.intro-sebrvv', {
        opacity: 0,
        duration: 0.4,
        delay: 0.6,
        ease: 'power1.inOut',
      })

      tl.to('.intro-portafolio', {
        opacity: 0,
        duration: 0.4,
        ease: 'power1.inOut',
      }, "-=0.25") // inicia ligeramente antes del fin del anterior

      // Oculta contenedor completo al final
      tl.to('.intro-container', {
        display: 'none',
      }, "-=0.1")

    }, introRef)

    return () => ctx.revert()
  }, [onFinish])

  return (
    <div
      ref={introRef}
      className="intro-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0f0f0f',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '2.8rem',
          display: 'flex',
          gap: '0.6rem',
          alignItems: 'baseline',
        }}
      >
        <span
          className="intro-sebrvv"
          style={{
            fontWeight: 700, // bold
            letterSpacing: '1px',
          }}
        >
          SebRVV
        </span>
        <span
          className="intro-portafolio"
          style={{
            fontWeight: 300, // thin
            letterSpacing: '0.5px',
          }}
        >
          Portafolio
        </span>
      </h1>
    </div>
  )
}
