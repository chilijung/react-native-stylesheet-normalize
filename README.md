# react-native-styleSheet-normalize

normalize fontSize in different devices

## Install

```
yarn add react-native-stylesheet-normalize
```


## Why 

In different devices there are different `pixelRatio`, `width` and `height`. So appearance should not be always the same, the appearance should adapt it's fontSize to match user's device.  Use `normalizeText` extract from `react-native-elements` (see [here](https://github.com/react-native-training/react-native-elements/blob/master/src/helpers/normalizeText.js)).


## Usage

just replace your `StyleSheet.create` to `StyleSheetNormalize.create` and that's it!


```js

import StyleSheetNormalize from 'react-native-stylesheet-normalize';


const styles = StyleSheetNormalize.create({
  // your styles here
  // all `fontSize` value will wrap with `normalize(<fontSize value>)`
});
```

## License

MIT
