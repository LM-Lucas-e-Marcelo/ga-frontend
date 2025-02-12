import houseThumb from '../../assets/thumbnails/house.png'
import { BsHouse } from '../../assets/icons'
export const ProductCard = () => {
  return (
    <div className="w-[280px] rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all">
      <img
        src={houseThumb}
        alt="Consórcio de imóveis"
        className="h-[450px] mt-[-80px] object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      <span className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 text-[#2a4c7f] z-5 absolute top-[60px]">
        <BsHouse size={40} />
      </span>
      <p className="text-white text-lg mt-20 absolute text-center">
        Consórcio de Imóveis
      </p>
      <button className="absolute bottom-0 bg-gradient-to-b from-primary to-secondary w-full p-2 text-white text-lg hover:opacity-90">
        Saiba mais
      </button>
    </div>
  )
}
