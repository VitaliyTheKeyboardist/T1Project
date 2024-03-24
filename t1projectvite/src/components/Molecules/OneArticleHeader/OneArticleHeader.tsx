import { Post, UserData } from "../../../store/slices/postsSlice"
import H3Title from "../../Atoms/H3Title/H3Title"
import RankTagsBlock from "../RankTagsBlock/RankTagsBlock"
import UserCard from "../UserCard/UserCard"
import style from "./OneArticleHeader.module.css"

interface Props {
  post: Post | undefined
  user: UserData | undefined
}

const OneArticleHeader = ({ post, user }: Props) => {
  return (
    post && (
      <div className={style.container}>
      <H3Title type={"oneArticleTitle"}>How To Order Food On eatly ?</H3Title>
        <div className={style.userBlock}>
          {user && (
            <UserCard
              name={user.firstName}
              lastname={user.lastName}
              image={user.image}
            />
          )}
          <RankTagsBlock post={post} />
        </div>
      </div>
    )
  )
}

export default OneArticleHeader
