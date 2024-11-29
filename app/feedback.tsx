import * as React from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,} 
from 'react-native';import {Appbar,TextInput,Button,Dialog,Portal,PaperProvider,Icon,} from 'react-native-paper';
import { router } from 'expo-router';

export default function FeedbackScreen() {
  // For email input
  const [email, setEmail] = React.useState('');
  // For comment input
  const [comment, setComment] = React.useState('');

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Fixed Back Button */}
        <Appbar.BackAction
          onPress={() => router.back()}
          size={25}
          style={styles.fixedBackButton}
        />

        {/* KeyboardAvoidingView to handle keyboard adjustments */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={70} // Adjust based on back button height
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.containerMain}>
                <Text style={{ fontSize: 20 }}>
                  Please leave your comment or suggestion,
                </Text>
                <Text style={{ fontSize: 20 }}>
                  To receive a reply, include your email.
                </Text>
                <View style={styles.container}>
                  {/* Email Input */}
                  <TextInput
                    style={styles.textinputEmail}
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.container}>
                  {/* Comment Input */}
                  <TextInput
                    style={styles.textinputComment}
                    mode="outlined"
                    label="Comment"
                    value={comment}
                    multiline
                    onChangeText={(text) => setComment(text)}
                  />
                </View>
                <View style={styles.container}>
                  {/* Send Button */}
                  <Button
                    style={{ padding: 20 }}
                    icon="send"
                    mode="elevated"
                    onPress={showDialog}
                  >
                    Send
                  </Button>

                  {/* Success Dialog */}
                  <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} dismissable>
                      <Dialog.Content
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          height: 50,
                        }}
                      >
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
  containerMain: {
    width: '100%',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  textinputEmail: {
    fontWeight: 'semibold',
    width: '100%',
    height: 60,
    fontSize: 20,
  },
  textinputComment: {
    fontWeight: 'semibold',
    width: '100%',
    fontSize: 20,
  },
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 30, // Distance from the top of the screen
    left: 10, // Distance from the left of the screen
    zIndex: 10, // Ensures it stays on top
    backgroundColor: '#2986cc',
    color: 'white',
  },
  scrollContainer: {
    marginTop: 70, // Adjust the scroll content to leave space for the back button
    paddingHorizontal: 10, // Add some horizontal padding if needed
  },
});
