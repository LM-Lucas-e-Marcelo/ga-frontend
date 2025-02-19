import { SERVICES } from '../../constants/services'
import { ServiceCard } from './service-card'

export const Services = () => {
  return (
    <div
      id="products"
      className="w-full py-20 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white text-center font-secondary">
          Produtos
        </h1>
        <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
          {SERVICES.map((advantage) => (
            <ServiceCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </div>
    </div>
  )
}
