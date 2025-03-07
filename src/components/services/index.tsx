import { useRef } from 'react'
import { SERVICES } from '../../constants/services'
import { ServiceCard } from './service-card'
import { useInView, motion } from 'framer-motion'

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      id="products"
      className="w-full py-20 bg-gradient-to-b from-secondary to-primary"
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-white text-center font-secondary">
          Produtos
        </h1>
        <p className="text-white text-lg text-center mt-6 max-w-[800px]">
          Com a Cardelik, você pode adquirir imóveis, veículos pesados e leves,
          maquinário para seu negócio, serviços diversos, cirurgia plástica e
          até ouro, tudo de forma planejada e sem burocracia.
        </p>
        <div className="w-full flex items-center justify-center gap-10 mt-10 flex-wrap">
          {SERVICES.map((advantage) => (
            <ServiceCard
              key={advantage.title}
              {...advantage}
              variants={itemAnimation}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
