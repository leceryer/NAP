import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Appbar, TextInput, Button, Dialog, Portal, PaperProvider, Icon, MD3Colors } from 'react-native-paper';
import { router } from 'expo-router';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function feedbackScreen(){
    //for email input
    const [email, setEmail] = React.useState("");
    //for comment input
    const [comment, setComment] = React.useState("");

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    
    return(
        <PaperProvider>
        <SafeAreaView>
            <Appbar.BackAction onPress={() =>router.back()} size={40} />
                <ScrollView>
                    <View style={styles.containerMain}>
                        <Text style={{fontSize: 20}}>Please leave your comment or suggestion,</Text>
                        <Text style={{fontSize: 20}}>To receive a reply, include your email.</Text>
                    <View style={styles.container}>
                        <TextInput style={styles.textinputEmail} mode='outlined' label={"Email"} value={email} onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.container}>
                        <TextInput style={styles.textinputComment} mode='outlined' label={"Comment"} value={comment} multiline onChangeText={text => setComment(text)} />
                    </View>
                    <View style={styles.container}>

                        <Button style={{padding: 20}} icon='send' mode='elevated' onPress={showDialog}>Send</Button>
                        
                        <Portal>
                            <Dialog visible={visible}
                            onDismiss={hideDialog}
                            dismissable>
                                <Dialog.Content style={{alignContent:'center', alignItems: 'center'}}>
                                    <Text style={{fontSize:23, alignContent:'center', alignItems: 'center'}}>
                                        Feedback Sent!  <Icon source={"send-check"} color={'green'} size={23}/>
                                    </Text>
                                </Dialog.Content>
                            </Dialog>
                        </Portal>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    containerMain:{
        backgroundColor: '',
        width:'100%',
        alignContent:'flex-start',
        alignItems:'flex-start',
        padding: 15,
        flexDirection:'column',
        flex: 1,
    },
    container:{
        alignContent: 'center',
        alignItems:'center',
        flex: 1,
        width: '100%',
        marginBottom: 20,
    },
    textinputEmail:{
      fontWeight:'semibold',
      width:'100%',
      height: 60,
      fontSize: 20,
    },
    textinputComment:{
        fontWeight:'semibold',
        width:'100%',
        height: 400,
        fontSize: 20,
    },
  });