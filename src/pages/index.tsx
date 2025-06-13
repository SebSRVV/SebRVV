import { useState } from 'react'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tooling from '@/components/Tooling'
import FeaturedProjects from '@/components/FeaturedProject'

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar />

          <main className="bg-[#0F0F0F] text-white font-['Space Grotesk']">
            {/* Hero principal */}
            <Hero />

            {/* Tooling / Tecnologías */}
            <Tooling />

            {/* Mapa de Proyectos */}
<section id="projects">
  <FeaturedProjects />
</section>

            {/* Contacto */}
            <section
              id="contact"
              className="bg-[#0F0F0F] py-24 px-6 text-center text-white"
            >
              <h2 className="text-3xl font-semibold mb-4">🤝 Contacto</h2>
              <p className="text-lg font-light max-w-xl mx-auto text-[#CCCCCC]">
                ¿Tienes una idea o proyecto? Estoy abierto a colaborar y construir soluciones creativas.
              </p>
              <p className="mt-4 text-lg">
                📬{' '}
                <a
                  href="mailto:sebrvv@tudominio.com"
                  className="text-[#00D1FF] hover:underline"
                >
                  sebrvv@tudominio.com
                </a>
              </p>
            </section>
          </main>
        </>
      )}
    </>
  )
}
