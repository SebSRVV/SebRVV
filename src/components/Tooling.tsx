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

// Variants para el título
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 14, duration: 0.6 },
  },
}

// Variants para el contenedor de herramientas
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Variants para cada tarjeta
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 16,
    },
  },
}

export default function Tooling() {
  const t = useTranslations('tooling')

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        background:
          'linear-gradient(to bottom, #101820 0%, #101820 40%, #121212 70%, #121212 100%)',
        padding: '6rem 2rem',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Título con spring */}
      <motion.h2
        variants={titleVariants}
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

      {/* Grid con stagger */}
      <motion.div
        variants={gridVariants}
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
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: `0 12px 28px -6px ${tool.color}66, 0 0 10px ${tool.color}44`,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              padding: '1.5rem 1rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer',
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
                filter: 'brightness(0) invert(1)',
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
    </motion.section>
  )
}
