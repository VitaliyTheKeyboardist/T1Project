import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { SerializedError } from "@reduxjs/toolkit"
import { CommentsType } from "../../../store/slices/commentsSlice"
import H4Title from "../../Atoms/H4Title/H4Title"
import Comment from "../Comment/Comment"
import style from "./OneArticleComments.module.css"
import H3Title from "../../Atoms/H3Title/H3Title"

interface Props {
  comments: CommentsType | undefined
  error: FetchBaseQueryError | SerializedError | undefined
  isFetching: boolean
}

const OneArticleComments = ({ comments, error, isFetching }: Props) => {
  return (
    <>
      {error && <H3Title>Download Failure</H3Title>}
      {isFetching && <H3Title>Loading...</H3Title>}
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
    </>
  )
}

export default OneArticleComments
