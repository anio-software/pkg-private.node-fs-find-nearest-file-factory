import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

async function nodeFindNearestFile(...args) {
	return await async_impl(...args)
}

nodeFindNearestFile.sync = function(...args) {
	return sync_impl(...args)
}

export default nodeFindNearestFile
