/**
 * @brief Asynchronously find nearest file.
 * @description
 * Asynchronously finds the nearest file with the name `file_name` from starting point `dir_path`.
 * @param file_name The file to find.
 * @param dir_path The starting directory to start searching from.
 * @return
 * The path to the file or `false` if no file was found.
 */
export function findNearestFile(file_name : string, dir_path : string) : Promise<string | false>

/**
 * @brief Synchronously find nearest file.
 * @description
 * Synchronously finds the nearest file with the name `file_name` from starting point `dir_path`.
 * @param file_name The file to find.
 * @param dir_path The starting directory to start searching from.
 * @return
 * The path to the file or `false` if no file was found.
 */
export function findNearestFileSync(file_name : string, dir_path : string) : string | false
