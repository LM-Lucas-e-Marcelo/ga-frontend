import { IoLogoWhatsapp, MdEmail } from '../../assets/icons'
export const ContactButton = () => {
  return (
    <div className="flex gap-3 ml-auto">
      <a href="https://wa.me/99999999999999">
        <IoLogoWhatsapp className="text-secondary" size={24} />
      </a>
      <a href="mailto:arrumar@gmail.com">
        <MdEmail className="text-secondary" size={26} />
      </a>
    </div>
  )
}
