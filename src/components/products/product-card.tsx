import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import { tv } from 'tailwind-variants'
import { motion, MotionProps } from 'framer-motion'

const productCardContent = tv({
  base: 'text-lg text-white z-10 overflow-hidden max-h-[0px] p-0 transition-all duration-300',
  variants: {
    isOpen: {
      true: 'max-h-[400px] p-4',
    },
  },
})

interface ProductCardProps extends MotionProps {
  thumb: string
  title: string
  id: number
  icon: IconType
  description: string
  selectedId: number | null
  setSelectedId: Dispatch<SetStateAction<number | null>>
}
export const ProductCard = ({
  id,
  thumb,
  title,
  icon: Icon,
  description,
  selectedId,
  setSelectedId,
  ...rest
}: ProductCardProps) => {
  const handleSelect = () => {
    setSelectedId((prevState) => (prevState === id ? null : id))
  }
  return (
    <motion.div
      className="w-[280px] min-h-[200px] flex flex-col items-center justify-center relative overflow-hidden transition-all bg-white"
      {...rest}
    >
      <img src={thumb} alt={title} className="object-cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      <span className="w-24 h-24 bg-white opacity-80 rounded-full flex items-center justify-center p-4 text-zinc-900 z-5 absolute top-[60px]">
        <Icon size={40} />
      </span>
      <p className="text-white text-lg top-[180px] text-center z-10 absolute">
        {title}
      </p>

      <p className={productCardContent({ isOpen: selectedId === id })}>
        {description}
      </p>
      <button
        onClick={handleSelect}
        className="cursor:pointer bottom-0 bg-gradient-to-b from-primary to-secondary w-full p-3 text-white text-lg hover:opacity-90 text-center z-10"
      >
        {selectedId === id ? 'Fechar' : 'Saiba mais'}
      </button>
    </motion.div>
  )
}
