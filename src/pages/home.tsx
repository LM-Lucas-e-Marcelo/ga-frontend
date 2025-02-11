import { Hero } from '../components/hero'
import { Products } from '../components/products'

export function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Products />
    </div>
  )
}
