import { configureStore } from "@reduxjs/toolkit";
import commentsReduser from './commentsSlice'
import { commentApi } from "../../services/CommentService";

export const store = configureStore({
    reducer: {
        comments: commentsReduser,
        [commentApi.reducerPath]: commentApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(commentApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch