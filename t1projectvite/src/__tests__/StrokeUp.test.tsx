import { expect, test } from "vitest"
import StrokeBlock from "../components/Molecules/StrokeBlock/StrokeBlock"
import { fireEvent, render, screen } from "@testing-library/react"

test("skipNumberUp", () => {
  let skipNumber = 0
  const setSkipNumber = () => (skipNumber += 12)
  render(<StrokeBlock skipNumber={skipNumber} setSkipNumber={setSkipNumber} />)
  const btn = screen.getByTestId('btn-test')
  fireEvent.click(btn)
  expect(skipNumber).toBe(12)
})
