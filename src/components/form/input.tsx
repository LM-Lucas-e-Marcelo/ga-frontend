import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export const Input = ({ label, name, error, ...rest }: InputProps) => {
  return (
    <label htmlFor={name}>
      <span className="text-sm text-black">{label}</span>
      <input
        className="w-full bg-zinc-50 p-3 border border-black"
        name={name}
        {...rest}
      />
      <span className="text-sm text-red-500">{error}</span>
    </label>
  )
}
