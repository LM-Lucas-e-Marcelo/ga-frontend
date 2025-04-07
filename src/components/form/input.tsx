import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export const Input = ({ label, name, error, ...rest }: InputProps) => {
  return (
    <label htmlFor={name}>
      <span className="text-sm text-white">{label}</span>
      <input
        className="w-full bg-none p-3 border border-white text-white"
        name={name}
        {...rest}
      />
      <span className="text-sm text-red-500">{error}</span>
    </label>
  )
}
