import H3Title from "../../Atoms/H3Title/H3Title"
import Comment from "../../Molecules/Comment/Comment"
import style from "./CommentsBlock.module.css"

const CommentsBlock = () => {
  return (
    <div className={style.container}>
      <H3Title>
        <span style={{ color: "#5C4EAE" }}>Customer</span> Say
      </H3Title>
      <div className={style.commentsBlock}>
        <Comment
          type="expanded"
          userName="@omottley2h"
          text="I cannot believe how I found you, this is so pretty."
        />
        <div className={style.minimizedCommentsBlock}>
            <Comment type="minimized" text="I cannot believe how I found you, this is so pretty." />
            <Comment type="minimized" text="I cannot believe how I found you, this is so pretty." />
        </div>
      </div>
    </div>
  )
}

export default CommentsBlock
