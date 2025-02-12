import image from '../assets/team.png'

export const WhoAreWe = () => {
  return (
    <div className="w-full py-10">
      <div
        className="w-full max-w-[1440px] flex items-center p-10 gap-3 justify-around flex-wrap"
        id="whoAreWe"
      >
        <div className="sm:max-w-[50%]">
          <strong className="text-2xl sm:text-3xl mb-5 block text-secondary">
            Quem Somos
          </strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br /> Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <img src={image} width={400} alt="sobre nós" className="rounded-lg" />
      </div>
    </div>
  )
}
