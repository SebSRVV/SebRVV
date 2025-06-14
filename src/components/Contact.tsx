'use client'

import { useTranslations } from 'next-intl'
import { FaHandshake, FaEnvelopeOpenText } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        className={styles.contactCard}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className={styles.contactTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FaHandshake className={styles.icon} />
          {t('title')}
        </motion.h2>

        <motion.p
          className={styles.contactText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('description')}
        </motion.p>

        <motion.a
          href="mailto:sebrojasw@gmail.com"
          className={styles.contactButton}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaEnvelopeOpenText className={styles.iconButton} />
          {t('button')}
        </motion.a>
      </motion.div>
    </section>
  )
}
