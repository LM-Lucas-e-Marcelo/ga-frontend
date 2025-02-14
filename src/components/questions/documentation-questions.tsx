import { useState } from 'react'
import { DOCUMNETATION_QUESTIONS } from '../../constants/documentation-questions'
import { QuestionCard } from './question-card'

export const DocumentationQuestions = () => {
  const [openedCard, setOpenedCard] = useState('')

  const handleSelectCard = (question: string) => {
    setOpenedCard((prevState) => (prevState === question ? '' : question))
  }

  return DOCUMNETATION_QUESTIONS.map(({ question, answer }) => (
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
