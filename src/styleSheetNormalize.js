/**
 * @flow
 */

import {StyleSheet} from 'react-native';
import {normalize} from './normalizeText';

type Styles = {[key: string]: Object};

export default function(styleObj: Styles) {
  return StyleSheet.create(normalizeFontSize(styleObj));
}

export function normalizeFontSize(styleObj: Styles) {
  for (const key in styleObj) {
    if ({}.hasOwnProperty.call(styleObj, key)) {
      const fontSize = styleObj[key].fontSize;
      if (fontSize) {
        styleObj[key].fontSize = normalize(fontSize);
      }
    }
  }

  return styleObj;
}
