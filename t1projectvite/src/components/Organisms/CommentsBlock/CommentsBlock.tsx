import H3Title from "../../Atoms/H3Title/H3Title"
// import Comments from "../Comments/Comments"
import SliderComments from "../SliderComments/SliderComments"
import style from "./CommentsBlock.module.css"

const CommentsBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.titleBlock}>
        <H3Title>
          <span style={{ color: "#5C4EAE" }}>Customer</span> Say
        </H3Title>
      </div>
      <div className={style.commentsBlock}>
        {/* <Comments /> */}
        <SliderComments />
      </div>
    </div>
  )
}

export default CommentsBlock
