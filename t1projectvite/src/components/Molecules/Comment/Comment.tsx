import CommentImg from "../../Atoms/CommentImg/CommentImg"
import Text from "../../Atoms/Text/Text"
import UserName from "../../Atoms/UserName/UserName"
import style from "./Comment.module.css"

interface Props {
  type: "expanded" | "minimized" | "oneArticle"
  userName?: string | undefined
  text: string
}

const Comment = ({ type, userName, text }: Props) => {
  return (
    <div className={style[type]}>
      {type === "expanded" && (
        <div className={style.headerComment}>
          <UserName type={"comment"} content={userName} />
          <CommentImg />
        </div>
      )}
      {type === "oneArticle" && (
        <div className={style.headerCommentLong}>
          <UserName type={"comment"} content={userName} />
          <CommentImg />
        </div>
      )}
      <Text type={"comment"}>{text}</Text>
    </div>
  )
}

export default Comment
