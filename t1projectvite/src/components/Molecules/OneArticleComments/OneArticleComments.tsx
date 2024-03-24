import { CommentsType } from "../../../store/slices/commentsSlice"
import H4Title from "../../Atoms/H4Title/H4Title"
import Comment from "../Comment/Comment"
import style from "./OneArticleComments.module.css"

interface Props {
  comments: CommentsType | undefined
}

const OneArticleComments = ({ comments }: Props) => {
  return (
    <div className={style.commentsBlock}>
      <H4Title>Comments</H4Title>
      {comments &&
        comments.comments.map((item) => (
          <Comment
            key={item.id}
            type={"oneArticle"}
            userName={`@${item.user.username}`}
            text={item.body}
          />
        ))}
    </div>
  )
}

export default OneArticleComments
