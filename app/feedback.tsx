import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Appbar,
  TextInput,
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Icon,
} from 'react-native-paper';
import { router } from 'expo-router';

export default function FeedbackScreen() {
  // State for the email input field
  const [email, setEmail] = React.useState('');
  
  // State for the comment input field
  const [comment, setComment] = React.useState('');
  
  // State to manage the visibility of the dialog
  const [visible, setVisible] = React.useState(false);
  
  // Function to show the success dialog
  const showDialog = () => setVisible(true);
  
  // Function to hide the success dialog
  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Fixed Back Button */}
        <Appbar.BackAction
          onPress={() => router.back()} // Navigates to the previous screen
          size={25}
          style={styles.fixedBackButton}
        />

        {/* KeyboardAvoidingView to handle layout adjustments when the keyboard is open */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Adjusts behavior based on platform
          keyboardVerticalOffset={70} // Accounts for the back button's height
        >
          {/* Dismiss keyboard when touching outside an input field */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.containerMain}>
                {/* Instructional Text */}
                <Text style={{ fontSize: 20 }}>
                  Please leave your comment or suggestion,
                </Text>
                <Text style={{ fontSize: 20 }}>
                  To receive a reply, include your email.
                </Text>

                {/* Email Input */}
                <View style={styles.container}>
                  <TextInput
                    style={styles.textinputEmail}
                    mode="outlined" // Outlined style for the input
                    label="Email" // Label for the input
                    value={email} // Binds to the `email` state
                    onChangeText={(text) => setEmail(text)} // Updates `email` state on input
                  />
                </View>

                {/* Comment Input */}
                <View style={styles.container}>
                  <TextInput
                    style={styles.textinputComment}
                    mode="outlined" // Outlined style for the input
                    label="Comment" // Label for the input
                    value={comment} // Binds to the `comment` state
                    multiline // Allows multiple lines of text
                    onChangeText={(text) => setComment(text)} // Updates `comment` state on input
                  />
                </View>

                {/* Send Button */}
                <View style={styles.container}>
                  <Button
                    style={{ padding: 20 }}
                    icon="send" // Adds a send icon to the button
                    mode="elevated" // Elevated button style
                    onPress={showDialog} // Shows the success dialog on press
                  >
                    Send
                  </Button>

                  {/* Success Dialog */}
                  <Portal>
                    <Dialog
                      visible={visible} // Controls dialog visibility
                      onDismiss={hideDialog} // Hides the dialog when dismissed
                      dismissable // Allows dismissal by tapping outside
                    >
                      <Dialog.Content
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          height: 50,
                        }}
                      >
                        {/* Dialog content with success message */}
                        <Text
                          style={{
                            fontSize: 23,
                            alignContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          Feedback Sent!{' '}
                          <Icon source="send-check" color="green" size={23} />
                        </Text>
                      </Dialog.Content>
                    </Dialog>
                  </Portal>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  // Main container for the content
  containerMain: {
    width: '100%',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
    flexDirection: 'column',
    flex: 1,
  },
  // Shared container style for inputs and button
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  // Style for the email input field
  textinputEmail: {
    fontWeight: 'semibold',
    width: '100%',
    height: 60,
    fontSize: 20,
  },
  // Style for the comment input field
  textinputComment: {
    fontWeight: 'semibold',
    width: '100%',
    fontSize: 20,
  },
  // Style for the fixed back button
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 30, // Distance from the top of the screen
    left: 10, // Distance from the left of the screen
    zIndex: 10, // Ensures it stays on top
    backgroundColor: '#2986cc',
    color: 'white',
  },
  // Style for the scrollable container
  scrollContainer: {
    marginTop: 70, // Adjusts for the back button
    paddingHorizontal: 10, // Adds horizontal padding
  },
});
