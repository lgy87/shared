import { describe, expect, it } from "vitest"
import { safeParse } from "."

describe("safeParse", () => {
  it("可以正常解析正常的json字符串", () => {
    const foo = { id: 42, name: "foo" } as const
    const jsonStr = JSON.stringify(foo)
    const parsed = safeParse<typeof foo>(jsonStr)
    expect(parsed).toEqual(foo)
  })
  it("参数为null或者undefined时，返回null", () => {
    expect(safeParse(null)).toBeNull()
    expect(safeParse(undefined as unknown as null)).toBeNull()
  })
  it("可以处理异常的json, 返回提供的默认值", () => {
    const defaults = { id: 0, name: "default" }
    expect(safeParse("not json", defaults)).toEqual(defaults)
  })
})
