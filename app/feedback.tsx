import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function feedbackScreen(){
    const [email, setEmail] = React.useState("");
    const [comment, setComment] = React.useState("");

    return(
        <SafeAreaView>
            <Appbar.BackAction onPress={() =>router.back()} size={40} />
            <ScrollView>
                <View style={styles.containerMain}>
                <Text style={{fontSize: 20}}>Please leave your commenr or suggestion,</Text>
                <Text style={{fontSize: 20}}>To receive a reply, Include your email.</Text>
                    <View style={styles.container}>
                        <TextInput style={styles.textinputEmail} mode='outlined' label={"Email"} value={email} onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={styles.container}>
                        <TextInput style={styles.textinputComment} mode='outlined' label={"Comment"} value={comment} multiline onChangeText={text => setComment(text)} />
                    </View>
                    <View style={styles.container}>
                        <Button style={{padding: 20}} icon='send' mode='elevated'>Send</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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