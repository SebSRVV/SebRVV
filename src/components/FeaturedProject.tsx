'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaStar } from 'react-icons/fa'

import styles from './FeaturedProjects.module.css'
import { featuredProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const t = useTranslations('featured')
  const tp = useTranslations('projects')
  const containerRef = useRef<HTMLDivElement>(null)

  // 1️⃣ scrollYProgress for the whole timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // 2️⃣ a springed version for smoother motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })

  // 3️⃣ SVG path draw + fade
  const pathLength  = useTransform(smoothProgress, [0, 1], [0, 1])
  const dashOffset  = useTransform(smoothProgress, [0, 1], [1, 0])
  const lineOpacity = useTransform(smoothProgress, [0, 0.05, 0.15], [0, 0.6, 1])

  // total items
  const total = featuredProjects.length

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
            <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="90%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="lineFadeMask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="200" height="3000" fill="url(#maskGradient)" />
            </mask>
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
              pathLength,
              strokeDasharray: 1,
              strokeDashoffset: dashOffset,
              opacity: lineOpacity,
            }}
          />
        </svg>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0
          const title = tp(project.titleId.split('.').slice(1).join('.'))
          const description = tp(project.descriptionId.split('.').slice(1).join('.'))

          // 4️⃣ compute when this item should reveal:
          const start      = (index / total) * 0.9
          const end        = ((index + 1) / total) * 0.9
          const revealProg = useTransform(smoothProgress, [start, end], [0, 1])

          // 5️⃣ map to transforms:
          const x        = useTransform(revealProg, [0, 1], [isEven ? -50 : 50, 0])
          const y        = useTransform(revealProg, [0, 1], [100, 0])
          const scale    = useTransform(revealProg, [0, 1], [0.95, 1])
          const opacity  = useTransform(revealProg, [0, 0.1, 1], [0, 0.6, 1])
          const dotScale = useTransform(revealProg, [0, 0.7, 1], [0, 1.2, 1])

          return (
            <motion.div
              key={project.titleId}
              className={`${styles.projectRow} ${isEven ? styles.left : styles.right}`}
              style={{ x, y, scale, opacity }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                mass: 0.3,
              }}
            >
              <motion.div className={styles.dot} style={{ scale: dotScale }} />

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
