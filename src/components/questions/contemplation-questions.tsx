import { useState } from 'react'
import { CONTEMPLATION_QUESTIONS } from '../../constants/contemplation-questions'
import { QuestionCard } from './question-card'

export const ContemplationQuestions = () => {
  const [openedCard, setOpenedCard] = useState('')

  const handleSelectCard = (question: string) => {
    setOpenedCard((prevState) => (prevState === question ? '' : question))
  }

  return CONTEMPLATION_QUESTIONS.map(({ question, answer }) => (
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
