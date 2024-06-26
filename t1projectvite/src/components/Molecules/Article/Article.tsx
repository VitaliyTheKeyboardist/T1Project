import { Link } from "react-router-dom"
import Rank from "../../Atoms/Rank/Rank"
import Text from "../../Atoms/Text/Text"
import { useFetchSingleUserQuery } from "../../../services/PostService"
import UserCard from "../UserCard/UserCard"
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
  const { data: user, isFetching, error } = useFetchSingleUserQuery(userId)

  return (
    <article className={style.container}>
      <Link to={`/article/${postId}`} className={style.link}>
        <div className={style.articleTitle}>
          <Text type={"articleTitle"}>{title}</Text>
        </div>
        <div className={style.userCardBlock}>
          {isFetching && <Text type={"question"}>Download data...</Text>}
          {error && <Text type={"question"}>User is not loaded</Text>}
          {user && (
            <UserCard
              type={"userCardSmall"}
              name={user.firstName}
              lastname={user.lastName}
              image={user.image}
            />
          )}
          <Rank type={"articlesRank"} rank={reactions} />
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
        </div>
        <div className={style.articleBody}>
          <Text type={"articleBody"}>{body}</Text>
        </div>
      </Link>
    </article>
  )
}

export default Article
