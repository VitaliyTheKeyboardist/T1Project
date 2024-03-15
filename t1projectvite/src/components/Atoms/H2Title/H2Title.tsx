import { ReactNode } from "react"
import style from "./H2Title.module.css"

interface Props {
  children: ReactNode
}

const H2Title = ({ children }: Props) => {
  return (
    <h2 className={style.text}>
      {children}
    </h2>
  )
}

export default H2Title
