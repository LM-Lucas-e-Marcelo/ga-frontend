import { ComponentProps } from 'react'

interface SelectProps extends ComponentProps<'select'> {
  options: Array<{
    name: string
    value: string
  }>
  label: string
  error?: string
}

export const Select = ({
  options,
  name,
  label,
  error,
  ...rest
}: SelectProps) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <span className="text-sm text-black">{label}</span>
      <select
        name={name}
        {...rest}
        className="w-full bg-zinc-50 p-3 border border-black"
      >
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
      <span className="text-sm text-red-500">{error}</span>
    </label>
  )
}
