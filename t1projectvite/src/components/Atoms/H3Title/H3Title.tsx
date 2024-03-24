import { ReactNode } from "react"
import style from "./H3Title.module.css"

interface Props {
  type?: string
  children: ReactNode
}

const H3Title = ({ type, children }: Props) => {
  return type ? (
    <h3 className={style[type]}>{children}</h3>
  ) : (
    <h3 className={style.text}>{children}</h3>
  )
}

export default H3Title
