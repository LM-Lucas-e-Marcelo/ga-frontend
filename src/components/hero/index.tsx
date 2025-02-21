import { HeroForm } from './hero-form'

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-blue-600 flex bg-[url(/hero.png)] bg-cover bg-center">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-between py-10">
        <h1 className="text-5xl max-w-[500px] text-white font-primary">
          O caminho mais seguro para suas grandes realizações!
        </h1>
        <HeroForm />
      </div>
    </div>
  )
}
