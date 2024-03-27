import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { postApi } from "../../services/PostService"

export interface CommentToAdd {
  body: string
  userId: number
  postId: number
}

export interface UserData {
  firstName: string
  lastName: string
  image: string
}

export interface Comment {
  id: number
  body: string
  postId: number 
  user: {
    id: number
    username: string
  }
}

export interface CommentsType {
  comments: Comment[]
}

export interface Post {
  id: number
  reactions: number
  tags: string[]
  title: string
  userId: number
  body?: string
}

export interface PostsType {
  posts: Post[]
}

const initialState: PostsType = {
  posts: [],
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(
      postApi.endpoints.fetchAllPosts.matchFulfilled,
      (state, action: PayloadAction<PostsType>) => {
        const result = action.payload.posts
        state.posts = result
      }
    )
  },
})

export default postsSlice.reducer
