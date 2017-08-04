/**
 * @flow
 */

import {normalize} from '../normalizeText';

test('normalize text in iphone 4', () => {
  expect(normalize(10, 480, 320, 2)).toBe(9.5);
})

test('normalize text in iphone 5', () => {
  expect(normalize(10, 568, 320, 2)).toBe(9.5);
})

test('normalize text in iphone 6', () => {
  expect(normalize(10, 667, 375, 2)).toBe(11.5);
})

test('normalize text in iphone 6 plus', () => {
  expect(normalize(10, 736, 414, 3)).toBe(12.7);
})