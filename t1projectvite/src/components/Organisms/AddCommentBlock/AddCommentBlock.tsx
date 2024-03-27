import { useState } from "react"
import H3Title from "../../Atoms/H3Title/H3Title"
import TextArea from "../../Atoms/TextArea/TextArea"
import style from "./AddCommentBlock.module.css"
import { postApi } from "../../../services/PostService"
import { useAppDispatch } from "../../../store/hooks"
import { add } from "../../../store/slices/postCommentsSlice"

interface Props {
  postId: number
  userId: number
}

const AddCommentBlock = ({ postId, userId }: Props) => {
  const [value, setValue] = useState("")

  const dispatch = useAppDispatch()

  const [addComment, {}] = postApi.useAddCommentMutation()

  const handleAddComment = async () => {
    await addComment({ body: value, postId, userId }).then((result) =>
    dispatch(add(result))
    )
  }
  return (
    <div>
      <div className={style.titleBlock}>
        <H3Title>Add Comment</H3Title>
      </div>
      <TextArea onChange={setValue} value={value} />
      <button onClick={handleAddComment}>send</button>
    </div>
  )
}

export default AddCommentBlock
