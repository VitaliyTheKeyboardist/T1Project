import Comment from "../../Molecules/Comment/Comment"
import { commentApi } from "../../../services/CommentService"
import Text from "../../Atoms/Text/Text"

const Comments = () => {
  const { data, error, isLoading } = commentApi.useFetchAllCommentsQuery(null)

  return (
    <>
      {isLoading && <Text type="comment">Загрузка</Text>}
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
      {error && <Text type="comment">Данные не были загружены</Text>}
    </>
  )
}

export default Comments
