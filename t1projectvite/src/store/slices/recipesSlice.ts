import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { recipeApi } from "../../services/recipesService"

export interface Recipe {
  caloriesPerServing: number
  cookTimeMinutes: number
  cuisine: string
  difficulty: string
  id: number
  image: string
  ingredients: string[]
  instructions: string[]
  mealType: string[]
  name: string
  prepTimeMinutes: number
  rating: number
  reviewCount: number
  servings: number
  tags: string[]
  userId: number
}

export interface RecipesType {
  recipes: Recipe[]
}

const initialState: RecipesType = {
  recipes: [],
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    download: (state, action) => {
      state.recipes = action.payload
      console.log(state.recipes)
    },
    sort: (state, action: PayloadAction<RecipesType>) => {
      let result = action.payload.recipes
      state.recipes = result.sort((a, b) => b.rating - a.rating)
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      recipeApi.endpoints.fetchAllRecipes.matchFulfilled,
      (state, action: PayloadAction<RecipesType>) => {
        const result = action.payload.recipes
        state.recipes = result
      }
    )
  },
})
export const { download, sort } = recipesSlice.actions
export default recipesSlice.reducer
