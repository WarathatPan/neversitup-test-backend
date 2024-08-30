import { countSmileys } from '../utils/countSmileys';

/**
 * Test countSmileys function.
 *
 * @param {string[]} input - The array of strings to count valid smiley faces
 * @param {number} expected - The expected count of valid smiley faces
 */
test(`countSmileys in ':)', ';(', ';}', ':-D'`, () => {
  expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
});

/**
 * Test countSmileys with various inputs.
 */
test(`countSmileys in [';D', ':-(', ':-)', ';~)']`, () => {
  expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
});

/**
 * Test countSmileys with various inputs.
 */
test(`countSmileys in [';]', ':[', ';*', ':$', ';-D']`, () => {
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});
