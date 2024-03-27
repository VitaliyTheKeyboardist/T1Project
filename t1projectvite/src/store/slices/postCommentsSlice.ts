import { createSlice } from "@reduxjs/toolkit"
import { CommentsType } from "./commentsSlice"

const initialState: CommentsType = {
  comments: [],
}

const postCommentsSlice = createSlice({
  name: "postComments",
  initialState,
  reducers: {
    add: (state, action) => {
      state.comments.push(action.payload.data)
    },
  },
})
export const { add } = postCommentsSlice.actions
export default postCommentsSlice.reducer
