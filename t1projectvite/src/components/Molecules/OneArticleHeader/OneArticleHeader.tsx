import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { Post, UserData } from "../../../store/slices/postsSlice"
import H3Title from "../../Atoms/H3Title/H3Title"
import RankTagsBlock from "../RankTagsBlock/RankTagsBlock"
import UserCard from "../UserCard/UserCard"
import style from "./OneArticleHeader.module.css"
import { SerializedError } from "@reduxjs/toolkit"
import { useFetchSingleUserQuery } from "../../../services/PostService"

interface Props {
  post: Post
  error: FetchBaseQueryError | SerializedError | undefined
  isFetching: boolean
}

const OneArticleHeader = ({ post, error, isFetching }: Props) => {
  const {
    data: user,
    error: errorUser,
    isFetching: userIsFetching,
  } = useFetchSingleUserQuery(post.userId)
  return (
    <>
      {isFetching && <H3Title>Loading...</H3Title>}
      {error && <H3Title>Download Failure</H3Title>}
      {post && (
        <div className={style.container}>
          <H3Title type={"oneArticleTitle"}>
            How To Order Food On eatly ?
          </H3Title>
          <div className={style.userBlock}>
            {userIsFetching && <H3Title>Loading...</H3Title>}
            {errorUser && <H3Title>User not found</H3Title>}
            {user && (
              <UserCard
                type={"userCardMiddle"}
                name={user.firstName}
                lastname={user.lastName}
                image={user.image}
              />
            )}
            <RankTagsBlock post={post} />
          </div>
        </div>
      )}
    </>
  )
}

export default OneArticleHeader
