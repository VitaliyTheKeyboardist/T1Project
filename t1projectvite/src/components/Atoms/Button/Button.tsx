import style from "./Button.module.css"
import Stroke from "./Img/Stroke.svg"

interface Props {
  type: string
  text: string
  img?: string
}

const Button = ({ type, text, img }: Props) => {
  return (
    <button className={style[type]}>
      {text}
      {img === "afterText" && (
        <img className={style.image} src={Stroke} alt="кнопка" />
      )}
    </button>
  )
}

export default Button
