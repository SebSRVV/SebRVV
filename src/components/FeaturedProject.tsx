'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './FeaturedProjects.module.css'
import { featuredProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const pathRef = useRef<SVGPathElement>(null)
  const { scrollYProgress } = useScroll()

  // Control de dibujado (retrasado y progresivo)
  const dashOffset = useTransform(scrollYProgress, [0.2, 0.8], [1, 0])

  return (
    <section className={styles.section} id="featured">
      <h2 className={styles.heading}>✨ Proyectos Destacados</h2>

      <div className={styles.timelineContainer}>
        <svg
          className={styles.timelineSVG}
          viewBox="0 0 100 3000"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            {/* Gradiente de máscara para fade-in y fade-out animado */}
            <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor="white" stopOpacity="1" />
              <stop offset="95%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="lineFadeMask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#maskGradient)" />
            </mask>
          </defs>

          <motion.path
            ref={pathRef}
            d="
              M50 0 
              C20 200, 80 400, 50 600 
              S20 800, 50 1000 
              S80 1200, 50 1400 
              S20 1600, 50 1800 
              S80 2000, 50 2200 
              S20 2400, 50 2600 
              S80 2800, 50 3000"
            stroke="#00d1ff"
            strokeWidth="3"
            fill="none"
            mask="url(#lineFadeMask)"
            style={{
              pathLength: 1,
              strokeDashoffset: dashOffset,
            }}
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
