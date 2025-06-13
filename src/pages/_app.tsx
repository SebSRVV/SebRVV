import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <Component {...pageProps} />
}
