import { useFetchAllPostsQuery } from "../../../services/PostService"
import H3Title from "../../Atoms/H3Title/H3Title"
import Article from "../../Molecules/Article/Article"
import StrokeBlock from "../../Molecules/StrokeBlock/StrokeBlock"
import style from "./ArticleBlock.module.css"
import { useState } from "react"

const ArticleBlock = () => {
  const [skipNumber, setSkipNumber] = useState<number>(0)

  const { data, error, isFetching } = useFetchAllPostsQuery(skipNumber)
  return (
    <div className={style.container}>
      <H3Title>
        Latest <span style={{ color: "#6C5FBC" }}>Articles</span>
      </H3Title>
      <div className={style.articlesBlock}>
        {error && <H3Title>Download Failure</H3Title>}
        {isFetching && !data && <H3Title>Loading...</H3Title>}
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
      <StrokeBlock skipNumber={skipNumber} setSkipNumber={setSkipNumber} />
    </div>
  )
}

export default ArticleBlock
