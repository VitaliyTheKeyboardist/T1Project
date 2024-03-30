import Stroke from "../../Atoms/Stroke/Stroke"
import style from "./StrokeBlock.module.css"

interface Props {
  skipNumber: number
  setSkipNumber: React.Dispatch<React.SetStateAction<number>>
}

const StrokeBlock = ({ skipNumber, setSkipNumber }: Props) => {
  function handleClickRight(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    if (skipNumber < 144) setSkipNumber((prev) => prev + 12)
  }
  function handleClickLeft(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    if (skipNumber) setSkipNumber((prev) => prev - 12)
  }
  return (
    <div className={style.strokeBlock}>
      <Stroke
        type={"left"}
        enabled={skipNumber > 0}
        onClick={(event) => handleClickLeft(event)}
      />
      <Stroke
        type={"right"}
        enabled={skipNumber < 144}
        onClick={(event) => handleClickRight(event)}
      />
    </div>
  )
}

export default StrokeBlock
