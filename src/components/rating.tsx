import { useRef } from 'react'
import { IoIosStar } from '../assets/icons'
import { motion, useInView } from 'framer-motion'

const starsQuantity = 5
const starsArray = Array.from({ length: starsQuantity })

const customers = [
  {
    name: 'Edu Marques',
    comments: '4',
    photos: '1',
    message:
      'Gratidão demais pelo comprometimento e profissionalismo, além de um excelente atendimento, supriu TODAS as minhas expectativas, curtindo demais essa nova fase.',
  },
  {
    name: 'Priscila Farias',
    comments: '3',
    photos: '0',
    message:
      'Adorei o atendimento! Consegui achar a melhor solução para comprar  meu primeiro imóvel 👏🏻👏🏻👏🏻',
  },
  {
    name: 'Georgia Valentim',
    comments: '5',
    photos: '0',
    message:
      'Amei o ambiente!!!!! Atendimento impecável!!!!! Recomendo para todos!!!! Super simpáticos e atenciosos!!!!! Parabéns Cardelik vocês são excelentes! 🙏🏽🙏🏽 e já indiquei para toda minha família!',
  },
]

export function Rating() {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className="w-full py-20 bg-gradient-to-b from-zinc-100 to-white"
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div ref={ref} className="flex flex-col gap-3 p-10 max-w-[1440px] m-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-secondary font-secondary">
          Veja o que as pessoas estão dizendo sobre nós
        </h1>
        <div className="w-full flex items-center justify-center gap-5 flex-wrap">
          {customers.map((customer) => (
            <motion.div
              variants={item}
              className="bg-zinc-100 rounded-md p-4 w-[300px] h-[280px]"
              key={customer.name}
            >
              <strong className="text-xl">{customer.name}</strong>
              <p>{customer.comments} comentários</p>
              <span className="flex gap-2 items-center text-yellow-400">
                {starsArray.map((_, index) => (
                  <IoIosStar key={index} size={20} />
                ))}
              </span>

              <p className="mt-5">{customer.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
