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
    title: 'Test1',
    description: 'Landing con animaciones modernas y optimización para performance.',
    image: '/images/proj1.jpg',
    year: '2024',
    link: 'https://startup.example.com',
  },
  {
    title: 'Test2',
    description: 'Panel admin para plataforma B2B con autenticación y visualizaciones.',
    image: '/images/proj2.jpg',
    year: '2023',
    link: 'https://dashboard.example.com',
  },
  {
    title: 'Test3',
    description: 'E-commerce personalizado con pasarela de pagos y panel de control.',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
    {
    title: 'Test4',
    description: 'E-commerce personalizado con pasarela de pagos y panel de control.',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
    {
    title: 'Test5',
    description: 'E-commerce personalizado con pasarela de pagos y panel de control.',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
]
