import { Link } from "react-router-dom"
import { Post } from "../../../store/slices/postsSlice"
import Button from "../../Atoms/Button/Button"
import Text from "../../Atoms/Text/Text"
import style from "./OneArticleBody.module.css"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { SerializedError } from "@reduxjs/toolkit"
import H3Title from "../../Atoms/H3Title/H3Title"

interface Props {
  post: Post | undefined
  error: FetchBaseQueryError | SerializedError | undefined
  isFetching: boolean
}

const OneArticleBody = ({ post, error, isFetching }: Props) => {
  return (
    <>
      {error && <H3Title>Download Failure</H3Title>}
      {isFetching && <H3Title>Loading...</H3Title>}
      {post && (
        <div className={style.container}>
          <div className={style.textBlock}>
            <Text type={"oneArticleBody"}>{post.body}</Text>
          </div>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <Button
              type={"lightImageLink"}
              text={"All Articles"}
              img={"beforeText"}
            />
          </Link>
        </div>
      )}
    </>
  )
}

export default OneArticleBody
