import image from '../assets/logo.svg'

export const WhoAreWe = () => {
  return (
    <div
      id="who-are-we"
      className="w-full py-10 bg-gradient-to-b from-white to-zinc-100"
    >
      <div
        className="w-full max-w-[1440px] flex items-center p-10 gap-10 justify-around flex-wrap"
        id="whoAreWe"
      >
        <div className="sm:max-w-[50%]">
          <strong className="text-2xl sm:text-3xl mb-5 block text-secondary font-secondary">
            Quem somos
          </strong>
          <p className="text-lg">
            A Cardelik é uma ponte entre você e suas grandes realizações.
            Especialistas em consórcios, antecipação de FGTS e crédito, soluções
            financeiras seguras, personalizadas e acessíveis. Nossa missão é
            transformar sonhos em conquistas reais, garantindo um atendimento
            próximo, transparente e eficiente. Conte conosco para fazer parte da
            sua jornada rumo as suas realizações.
          </p>
        </div>
        <img src={image} className="md:w-[250px] w-[180px]" alt="sobre nós" />
      </div>
    </div>
  )
}
