import { useInView, motion } from 'framer-motion'
import image from '../assets/logo.svg'
import { useRef } from 'react'

export const WhoAreWe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div
      id="who-are-we"
      className="w-full py-10 bg-gradient-to-b from-white to-zinc-100 overflow-hidden"
    >
      <div
        ref={ref}
        className="w-full max-w-[1440px] flex items-center p-10 gap-10 justify-around flex-wrap"
        id="whoAreWe"
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
          transition={{ duration: 1 }}
          className="sm:max-w-[50%]"
        >
          <strong className="text-2xl sm:text-3xl mb-5 block text-secondary font-secondary">
            Quem somos
          </strong>
          <p className="text-lg">
            A Cardelik é uma ponte entre você e suas grandes realizações.
            Especialistas em consórcios, antecipação de FGTS e crédito, soluções
            financeiras seguras, personalizadas e acessíveis. Nossa missão é
            transformar sonhos em conquistas reais, garantindo um atendimento
            próximo, transparente e eficiente. Conte conosco para fazer parte da
            sua jornada rumo as suas realizações.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
          transition={{ duration: 1 }}
          src={image}
          className="md:w-[250px] w-[180px]"
          alt="sobre nós"
        />
      </div>
    </div>
  )
}
