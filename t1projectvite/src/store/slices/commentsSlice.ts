import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { commentApi } from "../../services/CommentService"

interface User {
  id: number
  username: string
}

export interface Comment {
  id: number
  body: string
  postId: number
  user: User
}

export interface CommentsType {
  comments: Comment[]
}

const initialState: CommentsType = {
  comments: [],
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(
      commentApi.endpoints.fetchAllComments.matchFulfilled,
      (state, action: PayloadAction<CommentsType>) => {
        const result = action.payload.comments
        state.comments = result
      }
    )
  },
})


export default commentsSlice.reducer
