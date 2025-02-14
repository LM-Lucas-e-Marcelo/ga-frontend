import { IoIosArrowForward } from '../../assets/icons'
import { tv, VariantProps } from 'tailwind-variants'

const questionCardContent = tv({
  base: 'w-full p-3 bg-tertiary rounded-bl-md rounded-br-md overflow-hidden max-h-[0px] p-0 transition-all duration-300 text-left',
  variants: {
    isOpen: {
      true: 'max-h-[500px] p-3',
    },
  },
})

type CardVarians = VariantProps<typeof questionCardContent>

interface QuestionCardProps extends CardVarians {
  title: string
  description: string
}
export const QuestionCard = ({
  title,
  isOpen,
  description,
}: QuestionCardProps) => {
  return (
    <div className="w-full h-full">
      <header className="flex justify-between bg-secondary p-3 rounded-md">
        <span className="text-lg text-white">{title}</span>{' '}
        <IoIosArrowForward size={30} className="text-white" />
      </header>
      <div
        className={questionCardContent({ isOpen })}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
