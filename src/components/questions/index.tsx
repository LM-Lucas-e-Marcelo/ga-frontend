import { QuestionsComponent } from './questions'

export const Questions = () => {
  return (
    <div
      id="questions"
      className="w-full pt-20 pb-6 bg-[url(/hero.png)] bg-right"
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center flex-col">
        <p className="text-lg text-zinc-400">Tire suas Dúvidas</p>
        <h1 className="text-4xl font-bold text-white text-center font-secondary">
          Perguntas frequentes
        </h1>
        <section className="w-full gap-4 mt-10 transition-all flex flex-col">
          <QuestionsComponent />
        </section>
        <div className="w-full mt-20 flex items-center justify-center gap-1">
          <strong className="text-white font-tertiary">Ainda em dúvida?</strong>{' '}
          <p className="text-zinc-200">
            Entre em{' '}
            <a
              href="https://wa.me/48998474237"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              contato!
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
