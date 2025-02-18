import { IoIosArrowForward } from '../../assets/icons'
import { tv, VariantProps } from 'tailwind-variants'

const questionCardContent = tv({
  base: 'w-full p-3 bg-white rounded-bl-md rounded-br-md overflow-hidden max-h-[0px] p-0 transition-all duration-300 text-left',
  slots: {
    header:
      'flex justify-between bg-gradient-to-b from-zinc-100 to-white p-3 rounded-md',
  },
  variants: {
    isOpen: {
      true: {
        base: 'max-h-[500px] p-3',
        header: 'rounded-br-none rounded-bl-none',
      },
    },
  },
})

type CardVarians = VariantProps<typeof questionCardContent>

interface QuestionCardProps extends CardVarians {
  title: string
  description: string
}

const { base, header } = questionCardContent()
export const QuestionCard = ({
  title,
  isOpen,
  description,
}: QuestionCardProps) => {
  return (
    <div className="w-full h-full">
      <header className={header({ isOpen })}>
        <span className="text-lg text-secondary">{title}</span>{' '}
        <IoIosArrowForward size={30} className="text-secondary" />
      </header>
      <div
        className={base({ isOpen })}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
