// Contact.tsx
'use client'

import { useTranslations } from 'next-intl'
import { FaHandshake, FaEnvelopeOpenText } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'
import styles from './Contact.module.css'

// 1) Importa y tipa tus variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
      ease: [0.22, 1, 0.36, 1],
      duration: 0.8,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        className={styles.contactCard}
        // 2) Ahora TS sabe que esto es un Variants
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <motion.h2
          className={styles.contactTitle}
          variants={itemVariants}    // ← sin error de tipo
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
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 0 }}
        >
          <FaEnvelopeOpenText className={styles.iconButton} />
          {t('button')}
        </motion.a>
      </motion.div>
    </section>
  )
}
