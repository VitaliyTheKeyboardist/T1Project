import { createSlice } from "@reduxjs/toolkit"
// import { useFetchAllCommentsQuery } from "../../services/CommentService"
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
// {
//     download: (state, action) => {
//       console.log(action.payload)
//       state.comments = action.payload.comments
//     },
//     changeName: (state, action) => {
//         state.comments.map((item) => {
//           if (item.id === action.payload) item.user.username = "VitaliyTheBest"
//           else return
//         })
//     },
//   },
  extraReducers: (build) => {
    build.addMatcher(
      commentApi.endpoints.fetchAllComments.matchFulfilled,
      (state, action) => {
        state.comments = action.payload.comments
      }
    )
  },
})

// export const { download, changeName } = commentsSlice.actions

export default commentsSlice.reducer
