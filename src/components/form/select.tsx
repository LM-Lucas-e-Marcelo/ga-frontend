import { ComponentProps } from 'react'

interface SelectProps extends ComponentProps<'select'> {
  options: Array<{
    name: string
    value: string
  }>
  label: string
}

export const Select = ({ options, name, label, ...rest }: SelectProps) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <span className="text-sm text-secondary">{label}</span>
      <select
        name={name}
        {...rest}
        className="w-full bg-zinc-50 p-3 border border-secondary  rounded-md"
      >
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </label>
  )
}
