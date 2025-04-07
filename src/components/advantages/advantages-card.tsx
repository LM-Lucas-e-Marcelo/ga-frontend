import { MotionProps, motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface AdvantagesCardProps extends MotionProps {
  title: string
  icon: IconType
  description?: string
}
export const AdvantagesCard = ({
  title,
  icon: Icon,
  description,
  ...rest
}: AdvantagesCardProps) => {
  return (
    <motion.div
      className=" flex flex-col items-center justify-start max-w-[250px] w-full z-10 bg-white h-[300px]"
      {...rest}
    >
      <span className="text-white bg-black w-full h-[150px] flex items-center justify-center">
        <Icon size={50} />
      </span>
      <div className="p-2 bg-white h-[160px] flex items-center flex-col mx-3 mt-[-20px]">
        <strong className="text-zinc-900 text-center max-w-[80%] text-lg font-tertiary mb-2">
          {title}
        </strong>
        {description && (
          <p className="text-zinc-900 text-center max-w-[80%] text-md">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
