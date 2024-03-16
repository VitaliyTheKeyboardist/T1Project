import { useState } from "react"
import Minus from './Minus.svg'
import Plus from './Plus.svg'
import style from "./QuestionButton.module.css"

const QuestionButton = () => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const image = expanded ? Minus : Plus
  const alt = expanded ? "Свернуть" : "Развернуть"

  return <div className={style.image} onClick={() => setExpanded(!expanded)}>
    <img src={image} alt={alt} />
  </div>
}

export default QuestionButton
