import Stroke from "./Img/Stroke.svg"
import StrokeLeft from "./Img/Stroke-left.svg"
import style from "./Button.module.css"

interface Props {
  type: string
  text: string
  img?: string
  onClick?: () => Promise<void>
  disabled?: boolean
}

const Button = ({ type, text, img, onClick, disabled }: Props) => {
  return (
    <button className={style[type]} disabled={disabled} onClick={onClick}>
      {img === "beforeText" && (
        <img className={style.imageLeft} src={StrokeLeft} alt="button" />
      )}
      {text}
      {img === "afterText" && (
        <img className={style.image} src={Stroke} alt="button" />
      )}
    </button>
  )
}

export default Button
