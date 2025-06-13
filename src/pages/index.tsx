import { useState } from 'react'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import FeaturedProject from '@/components/FeaturedProject'
import { projects } from '@/data/projects'
import Hero from '@/components/Hero'

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />

          <main style={{ paddingTop: '5rem' }}>
            <Hero />

            {/* Sección de Proyectos */}
            <section id="projects">
              {projects.map((project) => (
                <FeaturedProject key={project.id} {...project} />
              ))}
            </section>

            {/* Sección de Contacto */}
            <section id="contact" style={{ minHeight: '100vh', padding: '4rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contacto</h2>
              <p style={{ fontWeight: 300, color: '#ccc' }}>
                Puedes escribirme a <a href="mailto:sebrvv@tudominio.com" style={{ color: '#00D1FF' }}>sebrvv@tudominio.com</a>
              </p>
            </section>
          </main>
        </>
      )}
    </>
  )
}
