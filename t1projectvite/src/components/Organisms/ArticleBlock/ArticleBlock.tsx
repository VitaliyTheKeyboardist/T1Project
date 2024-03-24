import { useFetchAllPostsQuery } from "../../../services/PostService"
import H3Title from "../../Atoms/H3Title/H3Title"
import Article from "../../Molecules/Article/Article"
import StrokeBlock from "../../Molecules/StrokeBlock/StrokeBlock"
import { useAppSelector } from "../../../store/hooks"
import style from "./ArticleBlock.module.css"

const ArticleBlock = () => {
  const skipNumber = useAppSelector((state) => state.skipCounter.value)

  const { data } = useFetchAllPostsQuery(skipNumber)
  return (
    <div className={style.container}>
      <H3Title>
        Latest <span style={{ color: "#6C5FBC" }}>Articles</span>
      </H3Title>
      <div className={style.articlesBlock}>
        {data &&
          data.posts.map((item) => (
            <Article
              key={item.id}
              title={item.title}
              tags={item.tags}
              reactions={item.reactions}
              body={item.body}
              postId={item.id}
              userId={item.userId}
            />
          ))}
      </div>
      <StrokeBlock />
    </div>
  )
}

export default ArticleBlock
