import { createSlice } from "@reduxjs/toolkit"

export interface skipCounterType {
  value: number
}

const initialState: skipCounterType = {
  value: 0,
}

const skipCounterSlice = createSlice({
  name: "skipCounter",
  initialState,
  reducers: {
    incrementSkipCounter: (state) => {
      state.value += 12
      console.log(state.value)
    },
    decrementSkipCounter: (state) => {
      state.value -= 12
    },
  },
})

export const { incrementSkipCounter, decrementSkipCounter } =
  skipCounterSlice.actions

export default skipCounterSlice.reducer
