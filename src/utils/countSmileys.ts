/**
 * Count the number of valid smiley faces in an array of strings.
 * 
 * @param {string[]} arr - Array of strings containing smiley faces
 * @returns {number} The number of valid smiley faces
 */
export function countSmileys(arr: string[]): number {
    return arr.filter(s => /^[:;][-~]?[)D]$/.test(s)).length;
}
