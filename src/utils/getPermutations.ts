/**
 * Generate all unique permutations of a given string.
 * 
 * @param {string} text - string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function getPermutations(text: string): string[] {
    if (text.length <= 1) return [text];
    
    return text.split('').reduce<string[]>((acc, char, i) => {
        return acc.concat(
            getPermutations(text.slice(0, i) + text.slice(i + 1)).map(p => char + p)
        )}
    , []);
}
