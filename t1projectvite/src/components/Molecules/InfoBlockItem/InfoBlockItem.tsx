
import { ReactNode } from "react"
import style from './InfoBlockItem.module.css'

interface Props {
    children: ReactNode
}

const InfoBlockItem = ({ children }: Props) => {
  return (
    <div className={style.infoBlockItem}>
      {children}
    </div>
  )
}

export default InfoBlockItem
