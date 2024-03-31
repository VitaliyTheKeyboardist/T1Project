import { expect, test } from "vitest"
import Bookmark from "../components/Atoms/Bookmark/Bookmark"
import { fireEvent, render, screen } from "@testing-library/react"

test("Test Bookmark", () => {
  let visible = false
  render(Bookmark({ visible }))

  fireEvent.mouseEnter(screen.getByTestId("bookmark"), {
    value: (visible = true),
  })

  expect(visible).toBe(true)
})
