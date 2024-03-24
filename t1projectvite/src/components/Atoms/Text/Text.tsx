import { ReactNode } from "react"
import style from "./Text.module.css"

interface Props {
  type:
    | "mediumLight"
    | "opacityText"
    | "smallLight"
    | "foodCardStatus"
    | "deliveryTime"
    | "foodCardStatusCancelled"
    | "comment"
    | "question"
    | "answer"
    | "footer"
    | "articleTitle"
    | "articleBody"
    | "tag"
    | "oneArticleTag"
    | "userCardText"
    | "userCardName"
    | "oneArticleBody"
  children: ReactNode
}

const Text = ({ type, children }: Props) => {
  return (
    <p className={style[type]}>
      {type === "opacityText" && <span className={style.line}></span>}
      {children}
    </p>
  )
}

export default Text
