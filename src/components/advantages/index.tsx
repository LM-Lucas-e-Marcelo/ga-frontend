import { useRef } from 'react'
import { ADVANTAGES } from '../../constants/advantages'
import { AdvantagesCard } from './advantages-card'
import { useInView, motion } from 'framer-motion'

export const Advantages = () => {
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
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-20 bg-gradient-to-b from-zinc-100 to-white"
    >
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-secondary text-center font-secondary">
          Vantagens de adquirir com a Cardelik
        </h1>
        <p className="text-zinc-900 text-lg text-center mt-6 max-w-[800px]">
          Na Cardelik, oferecemos soluções inteligentes para quem deseja
          realizar grandes conquistas de forma segura e planejada. Com diversas
          opções de consórcio, financiamento e antecipação de FGTS, garantimos
          que você encontre a melhor alternativa para:
        </p>
        <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
          {ADVANTAGES.map((advantage) => (
            <AdvantagesCard
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
