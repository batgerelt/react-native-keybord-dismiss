# react-native-keyboard-dismiss

A React Native component that wraps `TouchableWithoutFeedback` to automatically dismiss the keyboard when tapped.

## Installation

To use this component in your React Native project, you can install it via npm or yarn:

```bash
npm install react-native-keyboard-dismiss
```
or
```bash
yarn add react-native-keyboard-dismiss
```


```jsx
import * as Native from "react-native";
import KeyboardDismiss from 'react-native-keyboard-dismiss';

export default (props) => {
  return(
    <KeyboardDismiss>
      <Native.TextInput placeholder="Input some text here..." />
    </KeyboardDismiss>
  )
}
```
