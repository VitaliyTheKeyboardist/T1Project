import { configureStore } from "@reduxjs/toolkit"
import commentsReduser from "./slices/commentsSlice"
import recipesReduser from "./slices/recipesSlice"
import postsReduser from "./slices/postsSlice"
import postCommentsReducer from "./slices/postCommentsSlice"
import { commentApi } from "../services/CommentService"
import { recipeApi } from "../services/recipesService"
import { postApi } from "../services/PostService"

export const store = configureStore({
  reducer: {
    comments: commentsReduser,
    recipes: recipesReduser,
    posts: postsReduser,
    postComments: postCommentsReducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(commentApi.middleware)
      .concat(recipeApi.middleware)
      .concat(postApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
