import { IoLogoWhatsapp, MdEmail } from '../../assets/icons'
export const ContactButton = () => {
  return (
    <div className="flex gap-3 ml-auto">
      <a href="https://wa.me/48988757617">
        <IoLogoWhatsapp className="text-secondary" size={24} />
      </a>
      <a href="mailto:contato@cardelik.com.br">
        <MdEmail className="text-secondary" size={26} />
      </a>
    </div>
  )
}
