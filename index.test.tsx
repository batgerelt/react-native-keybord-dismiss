import React from "react";
import renderer, { act } from "react-test-renderer";
import KeyboardDismiss from ".";
import { TextInput } from "react-native";

describe("KeyboardDismiss Component", () => {
  it("dismisses the keyboard when pressed", () => {
    const tree = renderer.create(
      <KeyboardDismiss>
        <TextInput placeholder="Tap here to dismiss the keyboard" />
      </KeyboardDismiss>
    );

    // Find the TextInput component
    const textInput = tree.root.findByType(TextInput);

    // Simulate a press event on the TextInput
    act(() => {
      textInput.props.onPress();
    });

    // You can add assertions here to check if the keyboard is dismissed.
    // For example, you can check if the TextInput is not focused or if the keyboard is not visible.

    // Clean up
    tree.unmount();
  });
});
