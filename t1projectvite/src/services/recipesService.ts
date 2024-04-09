import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Recipe, RecipesType } from "../store/slices/recipesSlice"

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    fetchAllRecipes: build.query<RecipesType, null>({
      query: () => ({
        url: "/recipes/meal-type/dinner",
        method: "GET",
      }),
      transformResponse: (response: RecipesType): RecipesType =>{
       const result =  response.recipes.sort((a: Recipe, b: Recipe) => b.rating - a.rating)
       return { recipes: result}
      },
    }),
  }),
})

export const { useFetchAllRecipesQuery } = recipeApi
