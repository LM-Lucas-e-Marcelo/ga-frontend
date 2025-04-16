import { Button } from '../form/button'
import { Input } from '../form/input'
import { Select } from '../form/select'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CurrencyInput } from '../form/currency-input'
import { motion } from 'framer-motion'

const schema = z.object({
  type: z.string().nonempty({ message: 'Selecione uma opção' }),
  value: z.string().nonempty({ message: 'Digite um valor válido' }),
  phone: z.string().nonempty({ message: 'Digite um telefone válido' }),
  email: z.string().nullable(),
  name: z.string().nonempty({ message: 'Digite um nome válido' }),
})

type FormValues = z.infer<typeof schema>

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
  {
    name: 'Cartas contempladas',
    value: 'Cartas contempladas',
  },
]
export const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const whatsappNumber = '48998474237'
    const message = `Olá, me chamo ${data.name} e gostaria de simular um crédito: \n - Tipo: ${data.type} \n - Valor: R$ ${data.value} \n - Telefone para contato: ${data.phone}${data.email ? `\n email para contato: ${data.email}` : ''}`
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <motion.div
      className=" w-[500px] h-[700px] p-4 shadow-lg z-10 bg-[url(/form.png)] md:bg-contain bg-cover bg-no-repeat bg-center flex items-center flex-col justify-center"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl leading-[30px] font-extrabold font-secondary text-white mb-[20px] text-center mt-[-20px]">
        Simule o seu
        <br />
        consórcio
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-[330px]mt-[-50px]"
      >
        <Select
          options={options}
          label="Tipo*"
          {...register('type')}
          error={errors.type?.message}
        />
        <Input
          label="Nome*"
          {...register('name')}
          error={errors.name?.message}
        />
        <CurrencyInput
          label="Valor*"
          {...register('value')}
          error={errors.value?.message}
        />
        <Input
          label="Telefone*"
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Input
          label="E-mail"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Button type="submit">SIMULAR CRÉDITO</Button>
      </form>
    </motion.div>
  )
}
