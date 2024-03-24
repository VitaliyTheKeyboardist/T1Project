import { useLocation } from "react-router-dom"
import {
  useFetchCommentsQuery,
  useFetchSinglePostQuery,
  useFetchSingleUserQuery,
} from "../../../services/PostService"
import OneArticleHeader from "../../Molecules/OneArticleHeader/OneArticleHeader"
import OneArticleBody from "../../Molecules/OneArticleBody/OneArticleBody"
import OneArticleComments from "../../Molecules/OneArticleComments/OneArticleComments"
import H3Title from "../../Atoms/H3Title/H3Title"

const OneArticle = () => {
  let { state } = useLocation()

  const {
    data: post,
    error: errorPost,
    isFetching: postIsFetching,
  } = useFetchSinglePostQuery(state.postId)
  const { data: user } = useFetchSingleUserQuery(state.userId)
  const {
    data: comments,
    error: errorComments,
    isFetching: commentsIsFetching,
  } = useFetchCommentsQuery(state.postId)

  return (
    <>
      {errorPost && <H3Title>Download Failure</H3Title>}
      {postIsFetching && <H3Title>Loading...</H3Title>}
      {post && (
        <>
          <OneArticleHeader
            post={post}
            user={user}
            error={errorPost}
            isFetching={postIsFetching}
          />
          <OneArticleBody
            post={post}
            error={errorPost}
            isFetching={postIsFetching}
          />
          <OneArticleComments
            comments={comments}
            error={errorComments}
            isFetching={commentsIsFetching}
          />
        </>
      )}
    </>
  )
}

export default OneArticle
