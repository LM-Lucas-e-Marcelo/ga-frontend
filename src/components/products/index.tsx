import { useRef } from 'react'
import { PRODUCTS } from '../../constants/products'
import { ProductCard } from './product-card'
import { motion, useInView } from 'framer-motion'

export const Products = () => {
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
      id="products"
      className="w-full md:py-20 py-26 bg-gradient-to-b from-zinc-100 to-white relative bg-[url(/hero.png)] bg-cover"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="w-full min-h-[750px]">
        <div className="flex items-start justify-center gap-10 flex-wrap max-w-[1000px] mx-auto mt-[-130px]">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              variants={itemAnimation}
              {...product}
            />
          ))}
        </div>
        <h1 className="md:text-[90px] text-[60px] mt-[50px] text-zinc-700">
          Produtos G&A
        </h1>
        <div className=" absolute bottom-0 w-full h-[120px] flex">
          <span className="bg-linear-to-bl from-black from-60% to-zinc-700 to-95% w-[350px] h-full flex items-center justify-center text-4xl text-white border-2 border-zinc-600">
            Sobre nós
          </span>
          <div className=" w-full h-full border-2 border-x-0 border-zinc-600" />
        </div>
      </div>
    </motion.div>
  )
}
