import { IoLogoWhatsapp, MdEmail } from '../../assets/icons'
export const ContactButton = () => {
  return (
    <div className="flex gap-3 ml-auto">
      <a href="https://wa.me/48999999999">
        <IoLogoWhatsapp className="text-black" size={24} />
      </a>
      <a href="mailto:contato@gaconsorcios.com.br">
        <MdEmail className="text-black" size={26} />
      </a>
    </div>
  )
}
