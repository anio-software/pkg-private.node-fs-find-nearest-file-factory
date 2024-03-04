import nodeFindNearestFile from "../src/index.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

console.log(
	await nodeFindNearestFile("package.json", path.resolve(__dirname, "project", "dir", "subdir"))
)
