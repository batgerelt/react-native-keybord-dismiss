import React from "react";
import * as Native from "react-native";

export default (props: Native.TouchableWithoutFeedbackProps) => (
  <Native.TouchableWithoutFeedback
    {...props}
    onPress={Native.Keyboard.dismiss}
  />
);
