#! /usr/bin/env node

import fg from "fast-glob"
import fs from "node:fs"
import {join, dirname, relative} from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function findRoot(dir) {
  while (!fs.existsSync(join(dir, "package.json"))) {
    const parent = dirname(dir)
    if (parent === dir) throw new Error("no root found")
    dir = parent
  }
  return dir
}

const root = findRoot(__dirname)
const srcDir = join(root, "src")
const outFile = join(srcDir, "index.ts")

const files = await fg([
  join(srcDir, "**/index.ts"),
  `!${join(srcDir, "**/*.test.ts")}`,
  `!${join(srcDir, "index.ts")}`
])

const exports = files.map(f => {
  const rel = "./" + relative(srcDir, f).replace(/\.ts$/, "")
  return `export * from "${rel}"`
})

fs.mkdirSync(dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, exports.join("\n") + "\n")

console.log("[src/index.ts] has been generated!")
