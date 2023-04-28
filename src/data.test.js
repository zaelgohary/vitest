import { it, expect, describe } from "vitest";
import { displayingOutput } from "./data";

describe("displayingErr", () => {
  it("should return a string no matter what value entered", () => {
    const input = 1;
    const input2 = false;
    const input3 = "invalid";

    const result1 = displayingOutput(input, input);
    const result2 = displayingOutput(input2, input2);
    const result3 = displayingOutput(input3, input3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  })
})