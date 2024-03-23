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
  reducers: {
    // changeName: (state, action: PayloadAction<number>) => {
    //   console.log(state.comments)
    //   state.comments.map((item) => {
    //     if (item.id === action.payload) item.user.username = "VitaliyTheBest"
    //     else return
    //   })
    // },
  },
  extraReducers: (build) => {
    build.addMatcher(
      commentApi.endpoints.fetchAllComments.matchFulfilled,
      (state, action: PayloadAction<CommentsType>) => {
        const result = action.payload.comments
        state.comments = result
        console.log(state.comments)
      }
    )
  },
})

// export const { changeName } = commentsSlice.actions

export default commentsSlice.reducer
