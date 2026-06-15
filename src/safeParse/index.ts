export function safeParse<T>(
  json: string | null,
  defaults: T = null as T,
): T | null {
  if (isNil(json)) return defaults

  try {
    return JSON.parse(json) as T
  } catch (e) {
    console.error((e as Error).message)
    return defaults
  }
}

function isNil(value: any): value is null | undefined {
  return value == null
}
