import abac from '../../assets/footer/abac.png'
import bancoCentral from '../../assets/footer/banco_central.png'

export const PreFooter = () => {
  return (
    <div className="flex flex-col p-10">
      <section className="flex gap-10 flex-wrap justify-center md:justify-start">
        <div className="flex flex-col text-white text-lg">
          <span className="ml-4">Regulizado</span>
          <img
            src={bancoCentral}
            alt="logo do banco central"
            width={250}
            className="mt-[10px]"
          />
        </div>
        <div className="text-white text-lg">
          <span className="ml-4">Membro</span>
          <img src={abac} alt="logo da ABAC" width={180} className="mt-[5px]" />
        </div>
      </section>
      <div className="mt-10 text-center flex flex-col gap-4 text-white">
        <p>
          CNPJ: 47.221.475/0001-71 uma empresa prestadora de serviços,
          fiscalizada e autorizada pelo Banco Central do Brasil, através do
          Certificado de Autorização nº 03/00/188/89, com funções de
          comercializar cotas e gestora dos negócios do grupo de consórcio a
          quem representa ativa ou passivamente, em juízo e fora dele, na defesa
          dos direitos e interesses coletivamente considerados, e para a
          execução do presente Contrato, elaborado de conformidade com a Lei
          11.795, de 08 de outubro de 2008, Circular 3432/09, editada pelo Banco
          Central do Brasil e o Código de Defesa do Consumidor.
        </p>
        <p>
          A G&A Consórcios não comercializa cotas com data certa para
          contemplação ou contempladas.
        </p>
      </div>
    </div>
  )
}
