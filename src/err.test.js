import { it, expect, describe } from "vitest";
import { displayingErr } from "./err";

describe("displayingErr", () => {
  it("should return a string no matter what value entered", () => {
    const input = 1;
    const input2 = false;
    const input3 = "invalid";

    const result1 = displayingErr(input);
    const result2 = displayingErr(input2);
    const result3 = displayingErr(input3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  })
})