import { useDispatch } from "react-redux"
import Comment from "../../Molecules/Comment/Comment"
// import { changeName } from "../../../store/slices/commentsSlice"
import { commentApi } from "../../../services/CommentService"
import Text from "../../Atoms/Text/Text"

const Comments = () => {
  const { data, error, isLoading } = commentApi.useFetchAllCommentsQuery(null)

  const dispatch = useDispatch()

  return (
    <>
      {isLoading && <Text type="comment">Загрузка</Text>}
      {data &&
        data.comments.map((item) => (
          <Comment
            key={item.id}
            type="expanded"
            userName={`@${item.user.username}`}
            text={item.body}
            // onClick={() => dispatch(changeName(item.id))}
          />
        ))}
        {error && <Text type="comment">Данные не были загружены</Text>}
    </>
  )
}

export default Comments
