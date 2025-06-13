import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'], // Idiomas disponibles
    defaultLocale: 'es',   // Idioma por defecto
  },
}

export default nextConfig
