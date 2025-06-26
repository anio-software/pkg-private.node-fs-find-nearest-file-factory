import {isNodeEnvironment, isString} from "@anio-software/pkg.is"

declare function nodeFsFindNearestFileSync(
	configFileName: string,
	dirPath: string
): string|false;

export async function nodeFsFindNearestFileSyncFactory(

): Promise<typeof nodeFsFindNearestFileSync> {
	const isNode = await isNodeEnvironment()

	if (!isNode) {
		throw new Error(`This function is only callable in a node environment.`)
	}

	const {default: nodeFs} = await import("node:fs")
	const {default: nodePath} = await import("node:path")

	return function nodeFsFindNearestFileSync(
		configFileName, dirPath
	) {
		const absoluteDirPath = nodeFs.realpathSync(dirPath)
		const parentDirPath = nodePath.dirname(absoluteDirPath)

		let configPath = null

		const entries = nodeFs.readdirSync(absoluteDirPath)

		for (const entry of entries) {
			const absoluteEntryPath = nodePath.resolve(absoluteDirPath, entry)
			const stat = nodeFs.lstatSync(absoluteEntryPath)

			// ignore directories and symbolic links
			if (stat.isDirectory() || stat.isSymbolicLink()) continue;

			if (stat.isFile() && entry === configFileName) {
				configPath = absoluteEntryPath

				break
			}
		}

		if (isString(configPath)) {
			return configPath
		}

		// do not recurse further if we just scanned root directory
		if (absoluteDirPath === "/" && parentDirPath === "/") {
			return false
		}

		return nodeFsFindNearestFileSync(configFileName, parentDirPath)
	}
}
