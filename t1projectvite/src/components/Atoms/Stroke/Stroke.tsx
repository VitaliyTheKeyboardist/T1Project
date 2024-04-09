import StrokeLeftEnabled from "./Image/StrokeImgLeftEnabled.svg"
import StrokeLeftDisabled from "./Image/StrokeImgLeftDisabled.svg"
import StrokeRightEnabled from "./Image/StrokeImgRightEnabled.svg"
import StrokeRightDisabled from "./Image/StrokeImgRightDisabled.svg"
import style from "./Stroke.module.css"

interface Props {
  type: "left" | "right"
  enabled: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Stroke = ({ type, enabled, onClick }: Props) => {
  return (
    <>
      {type === "left" && enabled && (
        <button
          className={style.strokeButton}
          data-testid="btn-test-left"
          onClick={onClick}
        >
          <img src={StrokeLeftEnabled} alt="stroke" />
        </button>
      )}
      {type === "left" && !enabled && (
        <button className={style.strokeButtonDisabled} onClick={onClick}>
          <img src={StrokeLeftDisabled} alt="stroke" />
        </button>
      )}
      {type === "right" && enabled && (
        <button
          className={style.strokeButton}
          data-testid="btn-test"
          onClick={onClick}
        >
          <img src={StrokeRightEnabled} alt="stroke" />
        </button>
      )}
      {type === "right" && !enabled && (
        <button className={style.strokeButtonDisabled} onClick={onClick}>
          <img src={StrokeRightDisabled} alt="stroke" />
        </button>
      )}
    </>
  )
}

export default Stroke
