import { motion, MotionProps } from 'framer-motion'

interface ProductCardProps extends MotionProps {
  thumb: string
  title: string
}
export const ProductCard = ({ thumb, title, ...rest }: ProductCardProps) => {
  return (
    <motion.div
      className="w-[280px] max-h-[250px] flex flex-col items-center justify-center relative overflow-hidden transition-all bg-white"
      {...rest}
    >
      <img src={thumb} alt={title} />

      <button className="cursor:pointer bg-white w-full p-3 text-zinc-900 text-lg hover:opacity-90 text-center z-10 absolute bottom-0">
        {title}
      </button>
    </motion.div>
  )
}
