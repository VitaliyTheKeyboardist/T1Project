import style from "./Line.module.css"

interface Props {
  type: "horizontal" | "vertical" | "horizontalComment"
}

const Line = ({ type }: Props) => {
  return <div className={style[type]}></div>
}

export default Line
