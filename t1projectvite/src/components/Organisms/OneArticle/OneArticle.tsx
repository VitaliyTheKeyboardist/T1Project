import { useLocation } from "react-router-dom"
import {
  useFetchCommentsQuery,
  useFetchSinglePostQuery,
  useFetchSingleUserQuery,
} from "../../../services/PostService"
import OneArticleHeader from "../../Molecules/OneArticleHeader/OneArticleHeader"
import OneArticleBody from "../../Molecules/OneArticleBody/OneArticleBody"
import OneArticleComments from "../../Molecules/OneArticleComments/OneArticleComments"

const OneArticle = () => {
  let { state } = useLocation()

  const { data: post } = useFetchSinglePostQuery(state.postId)
  const { data: user } = useFetchSingleUserQuery(state.userId)
  const { data: comments } = useFetchCommentsQuery(state.postId)

  return (
    post && (
      <>
        <OneArticleHeader post={post} user={user} />
        <OneArticleBody post={post} />
        <OneArticleComments comments={comments} />
      </>
    )
  )
}

export default OneArticle
