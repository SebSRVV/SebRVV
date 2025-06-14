// lib/projects.ts

export interface Project {
  titleId: string
  descriptionId: string
  image: string
  year: string
  link: string
}

export const featuredProjects: Project[] = [
  {
    titleId: 'projects.test1.title',
    descriptionId: 'projects.test1.description',
    image: '/images/proj1.jpg',
    year: '2024',
    link: 'https://startup.example.com',
  },
  {
    titleId: 'projects.test2.title',
    descriptionId: 'projects.test2.description',
    image: '/images/proj2.jpg',
    year: '2023',
    link: 'https://dashboard.example.com',
  },
  {
    titleId: 'projects.test3.title',
    descriptionId: 'projects.test3.description',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
  {
    titleId: 'projects.test4.title',
    descriptionId: 'projects.test4.description',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
  {
    titleId: 'projects.test5.title',
    descriptionId: 'projects.test5.description',
    image: '/images/proj1.jpg',
    year: '2022',
    link: 'https://ecommerce.example.com',
  },
]
