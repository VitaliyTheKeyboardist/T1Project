import { ReactNode } from "react"
import style from "./ListItem.module.css"

interface Props {
  children: ReactNode
}

const ListItem = ({ children }: Props) => {
  return <li className={style.listItem}>{children}</li>
}

export default ListItem
