import Minus from "./Minus.svg"
import Plus from "./Plus.svg"
import style from "./QuestionButton.module.css"

interface Props {
  expanded: boolean
  onClick: () => void
}

const QuestionButton = ({ expanded, onClick }: Props) => {
  const image = expanded ? Minus : Plus
  const alt = expanded ? "Свернуть" : "Развернуть"

  return (
    <button className={style.button} onClick={onClick}>
      <img src={image} alt={alt} />
    </button>
  )
}

export default QuestionButton
