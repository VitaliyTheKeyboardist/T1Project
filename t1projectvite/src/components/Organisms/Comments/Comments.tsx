import Comment from "../../Molecules/Comment/Comment"
import { commentApi } from "../../../services/CommentService"
import H3Title from "../../Atoms/H3Title/H3Title"

const Comments = () => {
  const { data, error, isFetching } = commentApi.useFetchAllCommentsQuery(null)

  return (
    <>
      {error && <H3Title>Download failure</H3Title>}
      {isFetching && <H3Title>Download...</H3Title>}
      {data &&
        data.comments.map(
          (item, index) =>
            index < 3 && (
              <Comment
                key={item.id}
                type="expanded"
                userName={`@${item.user.username}`}
                text={item.body}
              />
            )
        )}
    </>
  )
}

export default Comments
