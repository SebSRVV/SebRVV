'use client'

import { useState } from 'react'
import { GetStaticPropsContext } from 'next'

import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tooling from '@/components/Tooling'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

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

            <Contact />
          </main>
        </>
      )}
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
