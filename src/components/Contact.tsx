// Contact.tsx
'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { FaHandshake, FaEnvelopeOpenText } from 'react-icons/fa'
import { motion, Variants, useInView } from 'framer-motion'
import styles from './Contact.module.css'

// 1️⃣ Container only handles fade+slide once
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: 'easeOut',
      duration: 0.6,
    },
  },
}

// 2️⃣ Children handle their own entrance + hover/tap
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 18 },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { type: 'spring', stiffness: 250, damping: 20 },
  },
  tap: {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
}

export default function Contact() {
  const t    = useTranslations('contact')
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        ref={ref}
        className={styles.contactCard}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.h2
          className={styles.contactTitle}
          variants={itemVariants}
        >
          <FaHandshake className={styles.icon} />
          {t('title')}
        </motion.h2>

        <motion.p
          className={styles.contactText}
          variants={itemVariants}
        >
          {t('description')}
        </motion.p>

        <motion.a
          href="mailto:sebrojasw@gmail.com"
          className={styles.contactButton}
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaEnvelopeOpenText className={styles.iconButton} />
          {t('button')}
        </motion.a>
      </motion.div>
    </section>
  )
}
