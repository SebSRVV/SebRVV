import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Tooling() {
  return (
    <section
      style={{
        backgroundColor: '#101010',
        padding: '6rem 2rem',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#F5F5F5',
        }}
      >
        <span role="img" aria-label="toolbox">🧰</span> Tooling
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            whileHover={{
              y: -6,
              boxShadow: `0 0 18px ${tool.color}66`,
              borderColor: tool.color,
            }}
            style={{
              background: '#1B1B1B',
              padding: '1.6rem 1rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid #262626',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                height: '48px',
                marginBottom: '1rem',
                objectFit: 'contain',
                filter: 'invert(1)',
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
