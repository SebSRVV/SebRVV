import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  image: string
  link: string
}

export default function FeaturedProject({ title, description, image, link }: Props) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={title} width={800} height={450} />
        <h2 className="text-4xl font-semibold mt-6">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
      </a>
    </motion.section>
  )
}
