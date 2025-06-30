/**
 * Normalizes a string to be used as an ID.
 * This function trims the string and replaces whitespace characters with hyphens.
 * @param id The string to normalize.
 * @returns The normalized string.
 */
export function normalizeId(id: string): string {
  return id.trim().replace(/\s+/g, "-");
}

/**
 * Checks if a string is a valid ID.
 * A valid ID is a non-empty, non-blank string, that when normalized, is not longer than 100 characters.
 * @param id The string to validate as an ID.
 * @returns True if the string is a valid ID, false otherwise.
 */
export function isValidId(id: string): boolean {
  return !isEmptyString(id) && id.normalize().length <= 100;
}

/**
 * Checks if a string is a valid ID.
 * A valid ID is a non-empty, non-blank string, that when normalized, is not longer than 100 characters.
 * Throws an error if the string is not a valid ID.
 * @param id The string to validate as an ID.
 * @throws {Error} If the string is not a valid ID.
 */
export function checkIsValidId(id: string): void {
  if (isEmptyString(id) || id.normalize().length > 100) {
    throw new Error(
      "Invalid 'id' provided: must be a non-empty, non-blank string, and no longer than 100 characters once normalized.",
    );
  }
}

/**
 * Checks if a string is empty or contains only whitespace.
 * @param str The string to check.
 * @returns True if the string is empty or contains only whitespace, false otherwise.
 */
export function isEmptyString(str: string): boolean {
  return str.trim().length === 0;
}
