import CommentImg from "../../Atoms/CommentImg/CommentImg"
import Text from "../../Atoms/Text/Text"
import UserName from "../../Atoms/UserName/UserName"
import style from "./Comment.module.css"

interface Props {
  type: "expanded" | "minimized"
  userName?: string | undefined
  text: string
  onClick?: (() => void)
}

const Comment = ({ type, userName, text, onClick }: Props) => {
  return (
    <div className={style[type]} onClick={onClick}>
      {type === "expanded" && (
        <div className={style.headerComment}>
          <UserName content={userName} />
          <CommentImg />
        </div>
      )}
      <Text type={"comment"}>{text}</Text>
    </div>
  )
}

export default Comment
