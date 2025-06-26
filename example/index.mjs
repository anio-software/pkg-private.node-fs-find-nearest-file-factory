import {nodeFsFindNearestFileSyncFactory} from "../products/project/dist/default/index.min.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

const nodeFsFindNearestFileSync = await nodeFsFindNearestFileSyncFactory()

console.log(
	nodeFsFindNearestFileSync("config.mjs", path.resolve(__dirname, "project", "dir", "subdir"))
)
