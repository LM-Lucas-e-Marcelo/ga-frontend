import { ComponentProps } from 'react'

export const Button = ({ children, ...rest }: ComponentProps<'button'>) => {
  return (
    <button
      className="w-full bg-secondary text-white p-3 rounded-md cursor-pointer hover:opacity-80"
      {...rest}
    >
      {children}
    </button>
  )
}
