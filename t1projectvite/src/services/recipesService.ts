import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RecipesType } from "../store/slices/recipesSlice";

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchAllRecipes: build.query<RecipesType, null>({
      query: () => ({
        url: "/recipes/meal-type/snack",
        method: 'GET',
      })
    })
  })
})

export const { useFetchAllRecipesQuery } = recipeApi