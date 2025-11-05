/* File: isAlphabetOnly.js located in src/utils/ */

/**
 * Validates whether the input is a valid alphabetic name.
 * Only letters and a single space between words are allowed.
 * 
 * @param {any} data - User-provided name input.
 * @returns {number} - 1 if valid name, 0 if invalid.
 */
export const isAlphabetOnly = (data) => {
    // Ensure input is a string
    if (typeof data !== "string") return 0;

    // Trim and normalize
    const name = data.trim();

    /**
     * Regex Explanation
     * ^[A-Za-z]+            → must start with letters only
     * (?:\s[A-Za-z]+)?$     → allows only one space and another word (optional)
     * No digits, no multiple spaces, no symbols
     * Examples: "Abo", "Abo Bakar"
     */
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;

    // Step 5: Validate pattern
    return namePattern.test(name) ? 1 : 0;
};

/* File: charLength.js located in src/utils/ */

/**
 * Checks if input length is within a given range.
 *
 * @param {any} data - User-provided input value.
 * @param {number} min - Minimum allowed length.
 * @param {number} max - Maximum allowed length.
 * @returns {number} - 1 if within range, 0 if not.
 */
export const charLength = (data, min, max) => {
    // Step 1: Ensure data is a string (convert safely)
    if (data === null || data === undefined) return 0;

    const str = String(data).trim();

    // Step 2: Validate that min and max are numbers
    if (typeof min !== "number" || typeof max !== "number" || min < 0 || max < min) {
        console.error("Invalid min or max values passed to charLength()");
        return 0;
    }

    // Step 3: Check length boundaries
    const len = str.length;

    return len >= min && len <= max ? 1 : 0;
};

// ✅ Correct export — keep all variable names the same
export default isAlphabetOnly;
