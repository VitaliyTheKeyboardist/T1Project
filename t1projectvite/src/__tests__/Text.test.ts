import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Text from "../components/Atoms/Text/Text"; 

test('', () => {
    const type = 'mediumLight'
    const children = 'any Text'
    render(Text({type, children}))
    expect(children).toBe('any Text')
})