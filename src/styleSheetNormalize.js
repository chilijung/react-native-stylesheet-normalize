/**
 * @flow
 */

import {StyleSheet} from 'react-native';
import {normalize} from './normalizeText';
const React = require('react-native'); // eslint-disable-line no-undef
const {PixelRatio, Dimensions} = React;

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

type Styles = {[key: string]: Object};

export default function(styleObj: Styles) {
  return StyleSheet.create(normalizeFontSize(styleObj, deviceHeight, deviceWidth, pixelRatio));
}

export function normalizeFontSize(styleObj: Styles, deviceHeight, deviceWidth, pixelRatio) {
  for (const key in styleObj) {
    if ({}.hasOwnProperty.call(styleObj, key)) {
      const fontSize = styleObj[key].fontSize;
      if (fontSize) {
        styleObj[key].fontSize = normalize(fontSize, deviceHeight, deviceWidth, pixelRatio);
      }
    }
  }

  return styleObj;
}
