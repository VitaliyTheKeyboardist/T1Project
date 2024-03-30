import { useParams } from "react-router-dom"
import {
  useFetchCommentsQuery,
  useFetchSinglePostQuery,
} from "../../../services/PostService"
import OneArticleHeader from "../../Molecules/OneArticleHeader/OneArticleHeader"
import OneArticleBody from "../../Molecules/OneArticleBody/OneArticleBody"
import OneArticleComments from "../../Molecules/OneArticleComments/OneArticleComments"
import H3Title from "../../Atoms/H3Title/H3Title"
import AddCommentBlock from "../AddCommentBlock/AddCommentBlock"

const OneArticle = () => {
  const params = useParams()

  const {
    data: post,
    error: errorPost,
    isFetching: postIsFetching,
  } = useFetchSinglePostQuery(Number(params.postId))
  const {
    data: comments,
    error: errorComments,
    isFetching: commentsIsFetching,
  } = useFetchCommentsQuery(Number(params.postId))

  return (
    <>
      {errorPost && <H3Title>Download Failure</H3Title>}
      {postIsFetching && <H3Title>Loading...</H3Title>}
      {post && (
        <>
          <OneArticleHeader
            post={post}
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
          <AddCommentBlock postId={post.id} userId={post.userId} />
        </>
      )}
    </>
  )
}

export default OneArticle
