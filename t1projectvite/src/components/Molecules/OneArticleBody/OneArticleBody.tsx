import { Link } from "react-router-dom"
import { Post } from "../../../store/slices/postsSlice"
import Button from "../../Atoms/Button/Button"
import Text from "../../Atoms/Text/Text"
import style from "./OneArticleBody.module.css"

interface Props {
  post: Post | undefined
}

const OneArticleBody = ({ post }: Props) => {
  return (
    post && (
      <div className={style.container}>
        <div className={style.textBlock}>
          <Text type={"oneArticleBody"}>{post.body}</Text>
        </div>
        <Link to="/blog" style={{ textDecoration: 'none'}}>
          <Button
            type={"lightImageLink"}
            text={"All Articles"}
            img={"beforeText"}
          />
        </Link>
      </div>
    )
  )
}

export default OneArticleBody
