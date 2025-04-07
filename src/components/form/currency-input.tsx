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
      <span className="text-sm text-white">{label}</span>
      <Input
        className="w-full bg-none p-3 border border-white text-white"
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
