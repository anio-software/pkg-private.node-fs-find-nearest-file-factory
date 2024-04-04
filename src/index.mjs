import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function findNearestFile(config_file_name, dir_path) {
	return async_impl(config_file_name, dir_path)
}

export function findNearestFileSync(config_file_name, dir_path) {
	return sync_impl(config_file_name, dir_path)
}
