import { getPermutations } from '../utils/getPermutations';

/**
 * Test getPermutations function.
 * 
 * @param {string} input - The input string to generate permutations
 * @param {string[]} expected - The expected array of permutations
 */
test(`getPermutations of 'a'`, () => {
    expect(getPermutations('a')).toEqual(expect.arrayContaining(['a']));
});

/**
 * Test getPermutations with repeating characters.
 */
test(`getPermutations of 'ab'`, () => {
    expect(getPermutations('ab')).toEqual(expect.arrayContaining(['ab', 'ba']));
});

/**
 * Test getPermutations with repeating characters.
 */
test(`getPermutations of 'abc'`, () => {
    expect(getPermutations('abc')).toEqual(expect.arrayContaining(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
});

/**
 * Test getPermutations with repeating characters.
 */
test(`getPermutations of 'aabb'`, () => {
    expect(getPermutations('aabb')).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']));
});
