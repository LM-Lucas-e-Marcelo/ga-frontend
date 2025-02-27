import { QuestionsComponent } from './questions'

export const Questions = () => {
  return (
    <div
      id="questions"
      className="w-full py-20 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center flex-col">
        <p className="text-lg text-zinc-400">Tire suas Dúvidas</p>
        <h1 className="text-4xl font-bold text-white text-center font-secondary">
          Perguntas frequentes
        </h1>
        <section className="w-full gap-4 mt-10 transition-all flex flex-col">
          <QuestionsComponent />
        </section>
      </div>
    </div>
  )
}
