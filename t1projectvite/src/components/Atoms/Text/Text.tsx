import style from "./Text.module.css"

interface Props {
  type: string
  text: string
  spanText?: string
}

const Text = ({ type, text, spanText }: Props) => {
  return (
    <p className={style[type]}>
      {type === "opacityText" && <div className={style.line}></div>}
      {text}
      <span className={style.spanText}>{spanText}</span>
    </p>
  )
}

export default Text
