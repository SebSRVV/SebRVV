'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './FeaturedProjects.module.css'
import { featuredProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scroll = scrollTop / docHeight
      setScrollY(scroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.section} id="featured">
      <h2 className={styles.heading}>✨ Proyectos Destacados</h2>

      <div className={styles.timelineContainer}>
        <svg className={styles.timelineSVG} viewBox="0 0 100 3000" preserveAspectRatio="xMidYMin slice">
          <defs>
            <linearGradient id="fadeLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d1ff" stopOpacity="0" />
              <stop offset="10%" stopColor="#00d1ff" stopOpacity="1" />
              <stop offset="90%" stopColor="#00d1ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d1ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            ref={pathRef}
            className={styles.path}
            d="
              M50 0 
              C20 200, 80 400, 50 600 
              S20 800, 50 1000 
              S80 1200, 50 1400 
              S20 1600, 50 1800 
              S80 2000, 50 2200 
              S20 2400, 50 2600 
              S80 2800, 50 3000"
            stroke="url(#fadeLine)"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - scrollY * pathLength}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </svg>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              className={`${styles.projectRow} ${isEven ? styles.left : styles.right}`}
              initial={{ opacity: 0, y: 100, scale: 0.95, rotate: isEven ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectContent}
              >
                <div className={styles.year}>{project.year}</div>
                <div className={styles.title}>{project.title}</div>
                <p className={styles.description}>{project.description}</p>
                <img src={project.image} alt={project.title} />
              </a>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
