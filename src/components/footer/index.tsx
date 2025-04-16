import logo from '../../assets/footer/logo.png'
import google from '../../assets/footer/google.png'
import norton from '../../assets/footer/norton.png'
import { PreFooter } from './pre-footer'

export const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-secondary to-primary">
      <PreFooter />
      <div className="p-10w-full flex justify-around sm:flex-row flex-col items-center gap-3 sm:items-start sm:gap-0">
        <img src={logo} alt="Via" className="w-[250px] my-auto" />

        <section className="flex flex-col gap-2 p-5 rounded-md">
          <h1 className="text-xl text-white">Segurança e Qualidade</h1>
          <div className="flex gap-6 w-full justify-center sm:justify-normal items-center">
            <a href="https://www.sslshopper.com/ssl-checker.html#hostname=dominio">
              <img width={80} src={norton} alt="logo norton" />
            </a>
            <a href="https://transparencyreport.google.com/safe-browsing/search?url=dominio&hl=pt_BR">
              <img width={90} src={google} alt="logo google" />
            </a>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center p-6 border-t border-secondary text-white text-center">
        ©2025 G&A Consórcios. Todos os direitos reservados. | CNPJ:
        47.221.475/0001-71
      </div>
    </div>
  )
}
