import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
  decrementSkipCounter,
  incrementSkipCounter,
} from "../../../store/slices/skipCounterSlice"
import Stroke from "../../Atoms/Stroke/Stroke"
import style from "./StrokeBlock.module.css"

const StrokeBlock = () => {
  const dispatch = useAppDispatch()
  const skipNumber = useAppSelector((state) => state.skipCounter.value)
  function handleClickRight(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    if (skipNumber < 144) dispatch(incrementSkipCounter())
  }
  function handleClickLeft(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    if (skipNumber) dispatch(decrementSkipCounter())
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
