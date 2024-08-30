import { findOdd } from '../utils/findOdd';

/**
 * Test findOdd function.
 * 
 * @param {number[]} input - The array of numbers to find the odd-occurring number
 * @param {number} expected - The expected number that occurs an odd number of times
 */
test('findOdd in [7]', () => {
    expect(findOdd([7])).toBe(7);
});

/**
 * Test findOdd with more complex input.
 */
test('findOdd in [0]', () => {
    expect(findOdd([0])).toBe(0);
});

/**
 * Test findOdd with more complex input.
 */
test('findOdd in [1, 1, 2]', () => {
    expect(findOdd([1, 1, 2])).toBe(2);
});

/**
 * Test findOdd with more complex input.
 */
test('findOdd in [0,1,0,1,0]', () => {
    expect(findOdd([0,1,0,1,0])).toBe(0);
});

/**
 * Test findOdd with more complex input.
 */
test('findOdd in [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]', () => {
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
});
