import {nodeFsFindNearestFile} from "../dist/default/index.min.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

console.log(
	await nodeFsFindNearestFile("config.mjs", path.resolve(__dirname, "project", "dir", "subdir"))
)
