import { useState } from "react"
import QuestionButton from "../../Atoms/QuestionButton/QuestionButton"
import Text from "../../Atoms/Text/Text"
import Line from "../../Atoms/Line/Line"
import style from "./FAQBlockItem.module.css"

interface Props {
  question: string
  answer?: string | undefined
  status: boolean
}

const FAQBlockItem = ({ question, answer, status }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(status)
  return (
    <div style={{ cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
      <div className={style.questionBlock}>
        <Text type="question">{question}</Text>
        <QuestionButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {expanded && <Text type="answer">{answer}</Text>}
      <Line type="horizontalComment" />
    </div>
  )
}

export default FAQBlockItem
