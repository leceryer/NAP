import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string; // The text label displayed on the button
  onPress: () => void; // The function to be executed when the button is pressed
};

// Button Component
export default function Button({ label, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      {/* Pressable button to handle user interaction */}
      <Pressable 
        style={styles.button} 
        onPress={onPress} // Trigger the `onPress` function passed via props
      >
        {/* Label text displayed on the button */}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  // Container for the button
  buttonContainer: {
    width: 320, // Fixed width of the button
    height: 68, // Fixed height of the button
    marginHorizontal: 20, // Horizontal margin for spacing
    alignItems: 'center', // Center the button horizontally within the container
    justifyContent: 'center', // Center the button vertically within the container
    padding: 3, // Padding around the button for spacing
  },
  // Styles for the Pressable button
  button: {
    borderRadius: 20, // Rounded corners for the button
    width: '100%', // Button takes up the full width of the container
    height: '100%', // Button takes up the full height of the container
    alignItems: 'center', // Center the label horizontally within the button
    justifyContent: 'center', // Center the label vertically within the button
    flexDirection: 'row', // Row layout (useful if an icon is added later)
    backgroundColor: '#f5ceed', // Background color of the button
  },
  // Styles for the button label (text)
  buttonLabel: {
    color: 'black', // Text color
    fontSize: 16, // Font size of the label
  },
});
