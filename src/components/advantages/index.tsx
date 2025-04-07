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
      className="w-full py-20 bg-gradient-to-b from-zinc-100 to-white px-4 relative overflow-hidden"
    >
      <div ref={ref} className="w-full flex flex-col items-center ">
        <div className="w-full flex items-center justify-center gap-10 mt-10 flex-wrap ">
          {ADVANTAGES.map((advantage) => (
            <AdvantagesCard
              key={advantage.title}
              {...advantage}
              variants={itemAnimation}
            />
          ))}
        </div>
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 grid grid-cols-3">
          <div className=" h-full w-full" />
          <div className=" h-full w-full border-l-2 border-r-2 border-zinc-600" />
          <div className=" h-full w-full relative">
            <div className="bg-black absolute bottom-0 left-0 right-0 h-[100px]" />
          </div>
        </div>
        <p className="absolute text-8xl rotate-[-90deg] right-[-180px] bottom-[160px] text-zinc-500 opacity-60">
          Vantagens
        </p>
      </div>
    </motion.div>
  )
}
