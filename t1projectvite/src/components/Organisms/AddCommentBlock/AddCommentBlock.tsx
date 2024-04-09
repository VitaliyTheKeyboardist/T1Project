import { useState } from "react"
import H3Title from "../../Atoms/H3Title/H3Title"
import TextArea from "../../Atoms/TextArea/TextArea"
import { postApi } from "../../../services/PostService"
import { useAppDispatch } from "../../../store/hooks"
import { add } from "../../../store/slices/postCommentsSlice"
import style from "./AddCommentBlock.module.css"
import Button from "../../Atoms/Button/Button"

interface Props {
  postId: number
  userId: number
}

const AddCommentBlock = ({ postId, userId }: Props) => {
  const [value, setValue] = useState<string>("")

  const dispatch = useAppDispatch()

  const [addComment, { error, isLoading }] = postApi.useAddCommentMutation()

  const handleAddComment = async () => {
    await addComment({ body: value, postId, userId }).then((result) =>
      dispatch(add(result))
    )
    setValue("")
  }
  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <H3Title type={"oneArticleTitle"}>
          Add <span style={{ color: "#6C5FBC" }}>comment</span>
        </H3Title>
      </div>
      <TextArea onChange={setValue} value={value} />
      {error && <p>Error sending message</p>}
      <Button
        type={"sendButton"}
        text={"Send"}
        onClick={handleAddComment}
        disabled={!value || isLoading}
      />
    </div>
  )
}

export default AddCommentBlock
