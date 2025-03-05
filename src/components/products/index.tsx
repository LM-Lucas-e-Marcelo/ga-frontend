import { useRef, useState } from 'react'
import { PRODUCTS } from '../../constants/products'
import { ProductCard } from './product-card'
import { motion, useInView } from 'framer-motion'

export const Products = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
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
      id="modality"
      className="w-full py-20 bg-gradient-to-b from-zinc-100 to-white"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <h1 className="text-4xl font-bold text-secondary text-center mb-10 font-secondary">
          Modalidade
        </h1>
        <div className="flex items-start justify-center gap-10 flex-wrap">
          {PRODUCTS.map((product) => (
            <ProductCard
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              key={product.id}
              variants={itemAnimation}
              {...product}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
