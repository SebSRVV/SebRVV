import { motion, Variants } from 'framer-motion'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { useTranslations } from 'next-intl'

const tools = [
  { name: 'TypeScript', icon: '/tooling/typescript.svg', color: '#3178C6' },
  { name: 'JavaScript', icon: '/tooling/javascript.svg', color: '#F7DF1E' },
  { name: 'React', icon: '/tooling/react.svg', color: '#61DAFB' },
  { name: 'Next.js', icon: '/tooling/nextjs.svg', color: '#FFFFFF' },
  { name: 'HTML5', icon: '/tooling/html.svg', color: '#E34F26' },
  { name: 'C++', icon: '/tooling/cplusplus.svg', color: '#00599C' },
  { name: 'Node.js', icon: '/tooling/nodejs.svg', color: '#339933' },
  { name: 'Git', icon: '/tooling/git.svg', color: '#F1502F' },
  { name: 'GitHub', icon: '/tooling/github.svg', color: '#FFFFFF' },
  { name: 'Python', icon: '/tooling/python.svg', color: '#3776AB' },
  { name: 'MySQL', icon: '/tooling/mysql.svg', color: '#00758F' },
  { name: 'Azure', icon: '/tooling/azure.svg', color: '#0089D6' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Tooling() {
  const t = useTranslations('tooling')

  return (
    <section
      style={{
        background:
          'linear-gradient(to bottom, #101820 0%, #101820 40%, #121212 70%, #121212 100%)',
        padding: '6rem 2rem',
        fontFamily: "'Space Grotesk', sans-serif",
        //borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{
          fontSize: '2.6rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '3.5rem',
          color: '#F5F5F5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.8rem',
        }}
      >
        <HiOutlineWrenchScrewdriver size={36} /> {t('title')}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.06,
              y: -6,
              boxShadow: `0 10px 25px -4px ${tool.color}44, 0 0 8px ${tool.color}33`,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              padding: '1.5rem 1rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'default',
              backdropFilter: 'blur(2px)',
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                height: '48px',
                marginBottom: '1rem',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)', // fuerza a blanco
              }}
            />
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: tool.color,
                margin: 0,
              }}
            >
              {tool.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
