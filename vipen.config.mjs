import {generateFromTemplate} from "vipen/autogenerate"

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

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
