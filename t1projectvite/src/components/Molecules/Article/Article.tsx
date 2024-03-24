import { Link } from "react-router-dom"
import Rank from "../../Atoms/Rank/Rank"
import Text from "../../Atoms/Text/Text"
import style from "./Article.module.css"

interface Props {
  title: string
  tags: string[]
  reactions: number
  body?: string
  postId: number
  userId: number
}

const Article = ({ title, tags, reactions, body, postId, userId }: Props) => {
  return (
    <div className={style.container}>
      <Link to="/article" state={{ postId, userId }} className={style.link}>
        <div className={style.articleTitle}>
          <Text type={"articleTitle"}>{title}</Text>
        </div>
        <div className={style.tagsBlock}>
          <div className={style.tags}>
            {tags &&
              tags.map((item, index) => (
                <Text key={item} type={"tag"}>
                  #{item}
                  {index === tags.length - 1 ? "" : ","}
                </Text>
              ))}
          </div>
          <Rank type={"articlesRank"} rank={reactions} />
        </div>
        <div className={style.articleBody}>
          <Text type={"articleBody"}>{body}</Text>
        </div>
      </Link>
    </div>
  )
}

export default Article