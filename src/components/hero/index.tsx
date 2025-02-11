import { HeroForm } from './hero-form'

export const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-blue-600 flex">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-between py-10">
        <h1 className="text-4xl font-bold max-w-[400px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <HeroForm />
      </div>
    </div>
  )
}
