/**
 * Find the integer that appears an odd number of times in an array.
 * 
 * @param {number[]} arr - Array of integers
 * @returns {number} The integer that occurs an odd number of times
 */
export function findOdd(arr: number[]): number {
    return arr.reduce((a, b) => a ^ b);
}
