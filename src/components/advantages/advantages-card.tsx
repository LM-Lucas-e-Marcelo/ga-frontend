import { IconType } from 'react-icons'

interface AdvantagesCardProps {
  title: string
  icon: IconType
  description?: string
}
export const AdvantagesCard = ({
  title,
  icon: Icon,
  description,
}: AdvantagesCardProps) => {
  return (
    <div className="bg-gradient-to-b from-secondary to-primary rounded-md flex flex-col gap-6 items-center justify-center p-1 h-[320px] max-w-[250px] w-full">
      <span className="text-white ">
        <Icon size={50} />
      </span>
      <p className="text-white text-center max-w-[80%] text-xl">{title}</p>
      {description && (
        <p className="text-white text-center max-w-[80%] text-md">
          {description}
        </p>
      )}
    </div>
  )
}
