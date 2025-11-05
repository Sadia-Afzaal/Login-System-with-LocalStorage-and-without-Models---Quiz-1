/**
 * File: utils/sanitizeInput.js
 *
 * Description:
 * Universal input sanitizer for strings, numbers, arrays, and objects.
 * Protects against XSS, script injection, and unsafe characters.
 */

/**
 * Sanitizes different types of input data.
 *
 * @param {any} input - Any user-provided value (string, number, array, object)
 * @returns {any} - Cleaned and safe version of input
 */
const sanitizeInput = (input) => {
  // --- Handle null or undefined safely
  if (input === null || input === undefined) return "";

  // --- Primitive types
  if (typeof input === "number") return input;
  if (typeof input === "boolean") return input;

  // --- Recursively sanitize arrays
  if (Array.isArray(input)) {
    return input.map((item) => sanitizeInput(item));
  }

  // --- Recursively sanitize objects
  if (typeof input === "object") {
    const sanitizedObject = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        sanitizedObject[key] = sanitizeInput(input[key]);
      }
    }
    return sanitizedObject;
  }

  // --- Handle strings safely
  if (typeof input === "string") {
    let sanitized = input.trim();

    // Remove potentially dangerous patterns
    const blacklistPatterns = [
      /<script.*?>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+=".*?"/gi,
      /--/g,
      /;/g,
    ];
    blacklistPatterns.forEach((pattern) => {
      sanitized = sanitized.replace(pattern, "");
    });

    // Escape special HTML entities
    sanitized = sanitized
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "'")
      .replace(/\\/g, "");

    return sanitized;
  }

  // --- Fallback for unexpected types
  return String(input);
};

// ✅ Export for backend
module.exports = sanitizeInput;
