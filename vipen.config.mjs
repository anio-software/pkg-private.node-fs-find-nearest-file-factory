import {searchAndReplace, copyFile} from "vipen/processing"

const asyncToSync = {
	"async function nodeFindNearestFile(": "function nodeFindNearestFile(",
	"await fs.promises.realpath(": "fs.realpathSync(",
	"await fs.promises.readdir(": "fs.readdirSync(",
	"await fs.promises.lstat(": "fs.lstatSync(",
	"return await nodeFindNearestFile(": "return nodeFindNearestFile("
}

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		searchAndReplace("src/template.mjs", asyncToSync, "src/auto/sync.mjs"),
		copyFile("src/template.mjs", "src/auto/async.mjs")
	]
}
