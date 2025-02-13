import { PRODUCTS } from '../../constants/products'
import { ProductCard } from './product-card'

export const Products = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <h1 className="text-4xl font-bold text-secondary text-center mb-10">
          Produtos
        </h1>
        <div className="flex items-center justify-center gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
