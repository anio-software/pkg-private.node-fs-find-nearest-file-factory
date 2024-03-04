export default {
	preprocessing: [{
		file: "./src/template.mjs",
		items: {
			"async function nodeFindNearestFile(": "function nodeFindNearestFile(",
			"await fs.promises.realpath(": "fs.realpathSync(",
			"await fs.promises.readdir(": "fs.readdirSync(",
			"await fs.promises.lstat(": "fs.lstatSync(",
			"return await nodeFindNearestFile(": "return nodeFindNearestFile("
		},
		output: "./src/auto/sync.mjs"
	}, {
		file: "./src/template.mjs",
		items: {},
		output: "./src/auto/async.mjs"
	}]
}
