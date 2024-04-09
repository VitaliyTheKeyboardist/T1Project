import { Post } from "../../../store/slices/postsSlice"
import Rank from "../../Atoms/Rank/Rank"
import Text from "../../Atoms/Text/Text"
import style from "./RankTagsBlock.module.css"

interface Props {
  post: Post | undefined
}

const RankTagsBlock = ({ post }: Props) => {
  return (
    post && (
      <div className={style.tagsBlock}>
        <Rank type={"oneArticleRank"} rank={post.reactions} />
        <div className={style.tags}>
          {post.tags.map((item, index) => (
            <Text key={item} type={"oneArticleTag"}>
              #{item}
              {index === post.tags.length - 1 ? "" : ","}
            </Text>
          ))}
        </div>
      </div>
    )
  )
}

export default RankTagsBlock
