import React from "react";
import * as Native from "react-native";

const KeyboardDismiss = (props: Native.TouchableWithoutFeedbackProps) => (
  <Native.TouchableWithoutFeedback
    {...props}
    onPress={Native.Keyboard.dismiss}
  />
);

export default KeyboardDismiss;
