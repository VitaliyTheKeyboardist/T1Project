// import { useDispatch, useSelector } from "react-redux"
// import { changeName } from "../../../store/slices/commentsSlice"
import H3Title from "../../Atoms/H3Title/H3Title"
// import Comment from "../../Molecules/Comment/Comment"
import style from "./CommentsBlock.module.css"
// import { RootState } from "../../../store/slices"
import Comments from "../Comments/Comments"

const CommentsBlock = () => {

  // const comments = useSelector((state: RootState) => state.comments)
  // const dispatch = useDispatch()

  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <H3Title>
          <span style={{ color: "#5C4EAE" }}>Customer</span> Say
        </H3Title>
      </div>
      <div className={style.commentsBlock}>
        <Comments />
        {/* <Comment
          type="expanded"
          userName={comments[0].user.username}
          text={comments[0].body}
          onClick={() => dispatch(changeName())}
        />
        <div className={style.minimizedCommentsBlock}>
          <Comment
            type="minimized"
            text="I cannot believe how I found you, this is so pretty."
          />
          <Comment
            type="minimized"
            text="I cannot believe how I found you, this is so pretty."
          />
        </div> */}
      </div>
    </div>
  )
}

export default CommentsBlock
