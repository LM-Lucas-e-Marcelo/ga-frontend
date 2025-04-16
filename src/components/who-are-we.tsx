import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'

export const WhoAreWe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div
      id="whoarewe"
      className="w-full bg-gradient-to-b from-white to-zinc-100 overflow-hidden relative pb-[120px]"
    >
      <div
        ref={ref}
        className="w-full flex items-center gap-10 justify-around flex-wrap"
        id="whoAreWe"
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
          transition={{ duration: 1 }}
          className="sm:max-w-[50%] flex flex-col gap-6 pb-[120px] pl-16 pr-16 md:pr-0"
        >
          <strong className="text-2xl font-tertiary pt-10">
            Conheça mais sobre <br />a G&A Consórcios
          </strong>

          <p className="text-lg">
            Somos uma administradora de consórcio comprometida em oferecer
            soluções inteligentes e seguras para quem deseja conquistar seus
            objetivos com planejamento e estratégia
          </p>
          <p className="text-lg">
            Com uma trejetória sólida no mercado e uma equipe experiente,
            conectamos sonhos à realidade por meio de uma gestão eficiente,
            ética e centrada no cliente.
          </p>
          <p className="text-lg">
            Nascemos da expertise em controladoria e gestão e evoluímos para
            entregar uma experiência completa no universo do consórcio. Com mais
            de 1800 clientes ativos, seguimos construindo histórias de conquista
            ao lado de representantes e parceiros em todo o país
          </p>
          <p className="text-lg">
            Oferecemos uma estrutura moderna, plataforma integrada e suporte
            especializado, tornando o consórcio acessível, transparente e
            alinhado com as necessidades do mercado atual
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
          transition={{ duration: 1 }}
          className="md:ml-auto md:w-[40%] w-full"
        >
          <div className="min-h-[550px] md:w-[100%] w-full bg-[url(/empresa.png)] bg-cover" />
          <div className="pt-10 bg-[url(/hero.png)] overflow-hidden bg-center bg-cover">
            <p className="text-zinc-600 font-primary ml-[-20px] text-7xl m-0 md:block hidden">
              Sobre nós
            </p>
          </div>
        </motion.div>
        <div className=" absolute bottom-0 w-full h-[120px] flex">
          <span className="bg-linear-to-bl from-black from-60% to-zinc-500 to-95% md:w-[500px] w-[1200px] h-full flex items-center justify-center text-4xl text-white border-2 border-zinc-600">
            Nossas vantagens
          </span>
          <div className=" w-full h-full border-2 border-x-0 border-zinc-600" />
        </div>
      </div>
    </div>
  )
}
