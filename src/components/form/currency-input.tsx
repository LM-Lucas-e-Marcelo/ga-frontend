import Input from 'react-currency-input-field'

interface CurrencyInputProps {
  label: string
  error?: string
  name: string
}

export const CurrencyInput = ({
  label,
  name,
  error,
  ...rest
}: CurrencyInputProps) => {
  return (
    <label htmlFor={name}>
      <span className="text-sm text-black">{label}</span>
      <Input
        className="w-full bg-zinc-50 p-3 border border-black"
        name={name}
        decimalsLimit={2}
        prefix="R$"
        decimalSeparator=","
        groupSeparator="."
        allowNegativeValue={false}
        {...rest}
      />
      <span className="text-sm text-red-500">{error}</span>
    </label>
  )
}
