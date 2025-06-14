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
    year: 'https://propiconnect.sebrvv.online/',
    link: 'https://propiconnect.sebrvv.online/',
  },
  {
    titleId: 'projects.test2.title',
    descriptionId: 'projects.test2.description',
    image: '/images/proj2.jpg',
    year: 'https://safepassdocs.sebrvv.online/',
    link: 'https://safepassdocs.sebrvv.online/',
  },
  {
    titleId: 'projects.test3.title',
    descriptionId: 'projects.test3.description',
    image: '/images/proj3.jpg',
    year: 'https://bluefinance.sebrvv.online/',
    link: 'https://bluefinance.sebrvv.online/',
  },
  {
    titleId: 'projects.test4.title',
    descriptionId: 'projects.test4.description',
    image: '/images/proj4.jpg',
    year: 'https://proppiconnect.sebrvv.online/',
    link: 'https://proppiconnect.sebrvv.online/',
  },
  //{
  //  titleId: 'projects.test5.title',
  //  descriptionId: 'projects.test5.description',
  //  image: '/images/proj1.jpg',
  //  year: '2022',
  //  link: 'https://ecommerce.example.com',
  //},
]
