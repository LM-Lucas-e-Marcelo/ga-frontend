import { useState } from 'react'
import { QUESTIONS } from '../../constants/questions'
import { QuestionCard } from './question-card'

export const QuestionsComponent = () => {
  const [openedCard, setOpenedCard] = useState('')

  const handleSelectCard = (question: string) => {
    setOpenedCard((prevState) => (prevState === question ? '' : question))
  }

  return QUESTIONS.map(({ question, answer }) => (
    <button
      key={question}
      onClick={() => handleSelectCard(question)}
      className="w-full"
    >
      <QuestionCard
        title={question}
        description={answer}
        isOpen={openedCard === question}
      />
    </button>
  ))
}
