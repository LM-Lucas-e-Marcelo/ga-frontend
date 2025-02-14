import { useState } from 'react'
import { Button } from '../form/button'
import { ContemplationQuestions } from './contemplation-questions'
import { DocumentationQuestions } from './documentation-questions'

const categories = [
  {
    label: 'Contemplação',
    value: 'contemplation',
  },
  {
    label: 'Documentação',
    value: 'documentation',
  },
]

const QuestionTypes = {
  contemplation: <ContemplationQuestions />,
  documentation: <DocumentationQuestions />,
}

export const Questions = () => {
  const [questionsType, setQuestionsType] = useState<
    'contemplation' | 'documentation'
  >('contemplation')

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center flex-col">
        <p className="text-lg text-zinc-400">Tire suas Dúvidas</p>
        <h1 className="text-4xl font-bold text-secondary text-center font-secondary">
          Perguntas frequentes
        </h1>
        <div className="flex gap-4 mt-10">
          {categories.map(({ label, value }) => (
            <Button
              key={value}
              color={value === questionsType ? 'primary' : 'secondary'}
              onClick={() => setQuestionsType(value as never)}
            >
              {label}
            </Button>
          ))}
        </div>
        <section className="w-full gap-4 mt-10 transition-all">
          {QuestionTypes[questionsType]}
        </section>
      </div>
    </div>
  )
}
