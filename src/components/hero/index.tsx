import { HeroForm } from './hero-form'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-blue-600 flex bg-[url(/hero.png)] bg-cover bg-center overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-center py-10 flex-wrap md:justify-between">
        <motion.h1
          className="text-5xl text-center md:text-start max-w-[500px] text-white font-primary"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          O caminho mais seguro para suas grandes realizações!
        </motion.h1>
        <HeroForm />
      </div>
    </div>
  )
}
