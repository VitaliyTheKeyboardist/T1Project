import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post, PostsType, UserData } from "../store/slices/postsSlice"

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<PostsType, number>({
      query: (skip) => ({
        url: `/posts?limit=12&skip=${skip}&select=title,reactions,userId,tags,`,
        method: "GET",
      }),
    }),
    fetchSinglePost: build.query<Post, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method:'GET'
      })
    }),
    fetchSingleUser: build.query<UserData, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      })
    })
  }),
})

export const { useFetchAllPostsQuery, useFetchSinglePostQuery, useFetchSingleUserQuery } = postApi