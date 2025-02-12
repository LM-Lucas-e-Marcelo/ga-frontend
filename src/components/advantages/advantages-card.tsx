import { HiOutlineCurrencyDollar } from '../../assets/icons'

export const AdvantagesCard = () => {
  return (
    <div className="bg-secondary rounded-md flex flex-col gap-6 items-center justify-center p-1 h-[250px] max-w-[220px]">
      <span className="text-white ">
        <HiOutlineCurrencyDollar size={100} />
      </span>
      <p className="text-white text-center max-w-[80%] text-xl">
        Melhor planejamento financeiro
      </p>
    </div>
  )
}
