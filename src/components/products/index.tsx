import { useState } from 'react'
import { PRODUCTS } from '../../constants/products'
import { ProductCard } from './product-card'

export const Products = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div
      id="modality"
      className="w-full py-20 bg-gradient-to-b from-zinc-100 to-white"
    >
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <h1 className="text-4xl font-bold text-secondary text-center mb-10 font-secondary">
          Modalidade
        </h1>
        <div className="flex items-start justify-center gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
