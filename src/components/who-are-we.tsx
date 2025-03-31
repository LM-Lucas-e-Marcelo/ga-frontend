import { useInView, motion } from 'framer-motion'
import image from '../assets/short-logo.png'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
          transition={{ duration: 1 }}
          src={image}
          className="md:w-[500px] w-[180px]"
          alt="sobre nós"
        />
      </div>
    </div>
  )
}
