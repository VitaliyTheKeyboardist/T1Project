import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CommentsType } from "../store/slices/commentsSlice"

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    fetchAllComments: build.query<CommentsType, null>({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
    }),
  }),
})

export const { useFetchAllCommentsQuery } = commentApi
