// import style from './Blog.module.css'

import { useState } from "react"
import { useFetchAllPostsQuery, useFetchSinglePostQuery, useFetchSingleUserQuery } from "../../../services/PostService"

const Blog = () => {
  const [skipNumber, setSkipNumber] = useState(1)
  const { data } = useFetchSinglePostQuery(skipNumber)
  const { data: user } = useFetchSingleUserQuery(1)



  return (
    data && user && <div>
      <img src={user.image} />
      <button onClick={() => setSkipNumber(skipNumber + 12)}>Button{skipNumber}</button>
      {JSON.stringify(data)}
      </div>
  )
}

export default Blog