import { MotionProps, motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface AdvantagesCardProps extends MotionProps {
  title: string
  icon: IconType | string
  description: string
  isPersonalized: boolean
}
export const ServiceCard = ({
  title,
  icon: Icon,
  isPersonalized,
  ...rest
}: AdvantagesCardProps) => {
  return (
    <motion.div
      className="bg-zinc-100 flex flex-col gap-6 items-center justify-center p-1 h-[200px] max-w-[200px] w-full"
      {...rest}
    >
      {isPersonalized ? (
        <img
          alt="title"
          src={Icon as string}
          width={76}
          height={100}
          className="mb-[-20px]"
        />
      ) : (
        <span className="text-primary ">
          <Icon size={50} />
        </span>
      )}

      <p className="text-primary text-center max-w-[80%] text-xl">{title}</p>
      {/* <p className="text-primary text-center max-w-[80%] text-md">
        {description}
      </p> */}
    </motion.div>
  )
}
