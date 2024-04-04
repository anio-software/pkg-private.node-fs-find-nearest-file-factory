import {findNearestFile} from "../src/index.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

console.log(
	await findNearestFile("config.mjs", path.resolve(__dirname, "project", "dir", "subdir"))
)
