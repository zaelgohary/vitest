import {it, expect } from "vitest"
import{ extractNumbers, gettingData} from "./parser"


it('Should return number inputs', () => {
  const form = {num1: 1, num2: 2}
  const result = extractNumbers(form)

  expect(result).toBe([1, 2])
})