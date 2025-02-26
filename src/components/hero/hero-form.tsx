import { Button } from '../form/button'
import { Input } from '../form/input'
import { Select } from '../form/select'

const options = [
  {
    name: 'Imóveis',
    value: 'Imóveis',
  },
  {
    name: 'Serviços',
    value: 'Serviços',
  },
  {
    name: 'Motos',
    value: 'Motos',
  },
  {
    name: 'Veículos',
    value: 'Veículos',
  },
  {
    name: 'Consignado',
    value: 'Consignado',
  },
]
export const HeroForm = () => {
  return (
    <div className="bg-white w-[400px] rounded-md p-4 shadow-lg">
      <h1 className="text-2xl font-bold text-secondary mb-5 text-center">
        Você está perto de realizar
        <br />o seu projeto de vida.
      </h1>
      <form className="flex flex-col gap-3">
        <Select options={options} label="Tipo*" />
        <Input label="Valor*" />
        <Input label="Telefone*" />
        <Input label="E-mail" type="email" />
        <Button>SIMULAR CRÉDITO</Button>
      </form>
    </div>
  )
}
