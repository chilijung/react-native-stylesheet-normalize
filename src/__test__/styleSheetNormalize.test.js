/**
 * @flow
 */

import {normalizeFontSize} from '../styleSheetNormalize';

test('normalize react-native stylesheet object fontsize', () => {
  expect(normalizeFontSize({
    container: {
      width: 100,
      fontSize: 10,
      color: 'red',
    }
  }, 480, 320, 2)).toEqual({
    container: {
      width: 100,
      fontSize: 9.5,
      color: 'red',
    }
  });
});