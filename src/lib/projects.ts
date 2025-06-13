// lib/projects.ts

export interface Project {
  title: string
  description: string
  image: string
  year: string
  link: string
}

export const featuredProjects: Project[] = [
  {
    title: 'Landing para Startup',
    description: 'Landing con animaciones modernas y optimización para performance.',
    image: '/images/proj1.jpg',
    year: '2024',
    link: 'https://startup.example.com',
  },
  {
    title: 'Dashboard SaaS',
    description: 'Panel admin para plataforma B2B con autenticación y visualizaciones.',
    image: '/images/proj2.jpg',
    year: '2023',
    link: 'https://dashboard.example.com',
  },
  {
    title: 'Tienda Online',
    description: 'E-commerce personalizado con pasarela de pagos y panel de control.',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
]
