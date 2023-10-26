import React, { Fragment } from "react";
import * as Native from "react-native";

const KeyboardDismiss = (props: Native.TouchableWithoutFeedbackProps) => (
  <Native.TouchableWithoutFeedback
    {...props}
    onPress={Native.Keyboard.dismiss}
    children={<Fragment>{props?.children}</Fragment>}
  />
);

export default KeyboardDismiss;
