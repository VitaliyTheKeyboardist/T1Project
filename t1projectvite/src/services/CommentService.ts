import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CommentsType } from "../store/slices/commentsSlice"

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    fetchAllComments: build.query<CommentsType, null>({
      query: () => ({
        url: "/comments",
        method: 'GET'
      }),
    //   transformResponse: (response: any) => response.data ?? []
      
    }),
    
  }),
  
})

export const { useFetchAllCommentsQuery } = commentApi
