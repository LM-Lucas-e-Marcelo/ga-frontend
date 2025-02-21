import { useParams } from 'react-router'
import { PRODUCTS } from '../constants/products'
export const Modality = () => {
  const { id } = useParams()

  const modality = PRODUCTS.find((product) => product.id === Number(id))

  if (!modality) return null

  return (
    <div className="w-full bg-gradient-to-b from-white to-zinc-100 flex flex-col items-center">
      <div
        className="h-[300px] bg-secondary w-full mb-20 bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${modality.image})` }}
      >
        <span className="bg-primary absolute inset-0 opacity-80" />
      </div>
      <h1 className="text-4xl font-bold text-secondary text-center font-secondary">
        {modality.title}
      </h1>
      <p className="text-xl max-w-[800px] mt-10 mb-20 text-center">
        {modality.description}
      </p>
    </div>
  )
}
