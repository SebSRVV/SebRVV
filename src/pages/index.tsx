import { useState } from 'react'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'

import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tooling from '@/components/Tooling'
import FeaturedProjects from '@/components/FeaturedProject'

export default function Home() {
  const [introDone, setIntroDone] = useState(false)
  const t = useTranslations('contact') // para traducir la sección de contacto

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar />

          <main className="bg-[#0F0F0F] text-white font-['Space Grotesk']">
            <Hero />
            <Tooling />

            <section id="projects">
              <FeaturedProjects />
            </section>

            <section
              id="contact"
              className="bg-[#0F0F0F] py-24 px-6 text-center text-white"
            >
              <h2 className="text-3xl font-semibold mb-4">🤝 {t('title')}</h2>
              <p className="text-lg font-light max-w-xl mx-auto text-[#CCCCCC]">
                {t('description')}
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

// 👇 Carga las traducciones según el idioma actual
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  }
}
