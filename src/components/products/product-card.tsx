import { IconType } from 'react-icons'
import { NavLink } from 'react-router'

interface ProductCardProps {
  thumb: string
  title: string
  id: number
  icon: IconType
}
export const ProductCard = ({
  id,
  thumb,
  title,
  icon: Icon,
}: ProductCardProps) => {
  return (
    <div className="w-[280px] rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all">
      <img src={thumb} alt={title} className="h-[450px] object-cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      <span className="w-24 h-24 bg-white opacity-80 rounded-full flex items-center justify-center p-4 text-[#2a4c7f] z-5 absolute top-[60px]">
        <Icon size={40} />
      </span>
      <p className="text-white text-lg mt-20 absolute text-center">{title}</p>
      <NavLink
        to={`/modality/${id}`}
        className="absolute bottom-0 bg-gradient-to-b from-primary to-secondary w-full p-3 text-white text-lg hover:opacity-90 text-center"
      >
        Saiba mais
      </NavLink>
    </div>
  )
}
