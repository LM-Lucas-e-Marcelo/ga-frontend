import { ADVANTAGES } from '../../constants/advantages'
import { AdvantagesCard } from './advantages-card'

export const Advantages = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-b from-primary to-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white text-center">Vantagens</h1>
        <div className="flex items-center justify-center gap-10 mt-10">
          {ADVANTAGES.map((advantage) => (
            <AdvantagesCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </div>
    </div>
  )
}
