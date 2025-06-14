'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaStar } from 'react-icons/fa'

import styles from './FeaturedProjects.module.css'
import { featuredProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const t = useTranslations('featured')
  const tp = useTranslations('projects')
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section className={styles.section} id="featured">
      <h2 className={styles.heading}>
        <FaStar style={{ marginRight: '0.5rem', color: '#FFD700' }} />
        {t('title')}
      </h2>

      <div className={styles.timelineContainer} ref={containerRef}>
        <svg
          className={styles.timelineSVG}
          viewBox="0 0 100 3000"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            {/* Máscara con fade-in y fade-out */}
            <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="90%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="lineFadeMask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="200" height="3000" fill="url(#maskGradient)" />
            </mask>

            {/* Degradado desde azul a fondo */}
            <linearGradient id="gradientStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d1ff" />
              <stop offset="100%" stopColor="#121212" />
            </linearGradient>
          </defs>

          <motion.path
            d="
              M50 0 
              C20 200, 80 400, 50 600 
              S20 800, 50 1000 
              S80 1200, 50 1400 
              S20 1600, 50 1800 
              S80 2000, 50 2200 
              S20 2400, 50 2600 
              S80 2800, 50 3000"
            stroke="url(#gradientStroke)"
            strokeWidth="8"
            strokeLinecap="round"
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
          const title = tp(project.titleId.split('.').slice(1).join('.'))
          const description = tp(project.descriptionId.split('.').slice(1).join('.'))

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
                <div className={styles.title}>{title}</div>
                <p className={styles.description}>{description}</p>
                <img src={project.image} alt={title} />
              </a>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
