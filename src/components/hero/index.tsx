import { HeroForm } from './hero-form'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="w-full flex bg-[url(/hero.png)] bg-cover overflow-x-hidden relative md:min-h-[800px] min-h-[1500px]">
      <div className="absolute left-0 bottom-0 top-0 w-full h-[100%] opacity-95" />
      <div className="w-full px-8 flex items-center justify-center py-10 flex-wrap md:justify-around gap-6 z-10 relative">
        <motion.div
          className="flex flex-col md:items-start items-center z-10"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <path className="md:text-6xl  text-4xl md:text-start text-center max-w-[600px] text-white">
            Construindo <br /> caminhos para <br /> suas{' '}
            <strong className="font-extrabold">conquistas!</strong>
          </path>
          <span className="border-zinc-100 border text-white w-full mt-10 p-3 text-center text-xl">
            Com parcelas que cabem no seu bolso
          </span>
        </motion.div>
        <HeroForm />
        <div className=" absolute bottom-0 w-full h-[120px] flex">
          <span className="bg-linear-to-bl from-black from-60% to-zinc-700 to-95% w-[350px] h-full flex items-center justify-center text-4xl text-white border-2 border-zinc-600">
            Produtos
          </span>
          <div className=" w-full h-full border-2 border-x-0 border-zinc-600" />
        </div>
      </div>
    </div>
  )
}
