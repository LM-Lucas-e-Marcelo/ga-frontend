import { HeroForm } from './hero-form'
import { motion } from 'framer-motion'
import logo from '../../assets/footer/logo.png'

export const Hero = () => {
  return (
    <div className="w-full bg-black flex bg-[url(/hero.jpg)] md:bg-center bg-top-left bg-cover overflow-x-hidden relative h-screen">
      <div className='absolute left-0 bottom-0 top-0 bg-gradient-to-r from-zinc-900 to-black w-full h-[100%] opacity-95' />
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-center py-10 flex-wrap md:justify-around gap-6 z-10">
        <motion.div
          className="flex flex-col md:items-start items-center z-10"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="logo" className="md:w-[450px] w-[300px] ml-[-50px]" />
          <h1 className="md:text-5xl text-4xl md:text-start text-center max-w-[500px] font-primary text-white">
            O caminho mais seguro para suas grandes realizações!
          </h1>
        </motion.div>
        <HeroForm />
      </div>
    </div>
  )
}
