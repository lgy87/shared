import { describe, expect, it, vi } from "vitest"
import { delay } from "./index"

describe("delay", () => {
  it("延迟指定的毫秒数", async () => {
    const fn = vi.fn()

    vi.useFakeTimers()
    delay(1000).then(fn)
    await vi.advanceTimersByTimeAsync(999)
    expect(fn).not.toHaveBeenCalled()
    await vi.advanceTimersByTimeAsync(2)
    expect(fn).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
