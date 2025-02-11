import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
}

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <label htmlFor={name}>
      <span className="text-sm text-secondary">{label}</span>
      <input
        className="w-full bg-zinc-50 p-3 border border-secondary rounded-md"
        name={name}
        {...rest}
      />
    </label>
  )
}
