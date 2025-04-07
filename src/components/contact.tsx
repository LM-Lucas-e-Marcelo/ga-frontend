import {
  FaFacebookF,
  FaInstagram,
  IoLogoWhatsapp,
  MdEmail,
} from '../assets/icons'

export const Contact = () => {
  return (
    <div className="w-full pt-20  bg-gradient-to-b from-white to-zinc-100">
      <div className="w-full flex ">
        <div className="w-[50%] hidden md:block">
          <div className="h-[320px] bg-[url(/empresa-completa.png)] bg-cover bg-center" />
          <div className="h-[170px]" />
        </div>
        <div className="md:w-[50%] w-full">
          <header className="h-[70px] p-6 border-t-1 border-b-1 border-zinc-500 flex items-center text-3xl font-tertiary">
            Fale Conosco
          </header>

          <div className=" flex flex-col h-[250px] p-6 gap-6  border-b-1 border-zinc-500">
            <div className="flex flex-col">
              <strong className="text-xl font-tertiary">Suporte:</strong>
              <a className="text-xl">0800 202 0002</a>
            </div>
            <div className="flex flex-col">
              <strong className="text-xl font-tertiary">Email:</strong>
              <span className="flex flex-col">
                <a className="text-xl">contato@geaconsorcios.com.br</a>
                <a className="text-xl">diretoria@geaconsorcios.com.br</a>
                <a className="text-xl">contato@geaconsorcios.com.br</a>
              </span>
            </div>
          </div>

          <div className="flex flex-col p-6 h-[170px] border-l-1 border-b-0 border-zinc-500">
            <div className="flex flex-col">
              <strong className="text-xl font-tertiary">Horário:</strong>
              <p className="text-xl">Segunda a Sexta das 8h às 18h</p>
            </div>
            <div className="flex gap-3 mt-5 ml-auto">
              <a className="bg-black p-2 rounded-full">
                <MdEmail size={20} className="text-white" />
              </a>
              <a className="bg-black p-2 rounded-full">
                <IoLogoWhatsapp size={20} className="text-white" />
              </a>
              <a className="bg-black p-2 rounded-full">
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a className="bg-black p-2 rounded-full">
                <FaInstagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
