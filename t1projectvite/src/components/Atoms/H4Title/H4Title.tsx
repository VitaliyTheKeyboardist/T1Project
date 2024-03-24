import { ReactNode } from "react"
import style from "./H4Title.module.css"

interface Props {
  children: ReactNode
}

const H4Title = ({ children }: Props) => {
  return <h4 className={style.text}>{children}</h4>
}

export default H4Title
