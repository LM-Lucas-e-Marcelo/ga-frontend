import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-full p-3 cursor-pointer border border-white',
  variants: {
    color: {
      primary: 'bg-white text-black hover:opacity-80',
      secondary: 'bg-white text-secondary hover:bg-secondary hover:text-white',
    },
  },

  defaultVariants: {
    color: 'primary',
  },
})

type ButtonProps = VariantProps<typeof button> & ComponentProps<'button'>

export const Button = ({ children, color, ...rest }: ButtonProps) => {
  return (
    <button className={button({ color })} {...rest}>
      {children}
    </button>
  )
}
