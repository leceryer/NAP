import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Appbar, TextInput} from 'react-native-paper';
import { router } from 'expo-router';

export default function feedbackScreen(){
    const [email, setEmail] = React.useState("");
    const [comment, setComment] = React.useState("");

    return(
        <SafeAreaView>
            <Appbar.BackAction onPress={() =>router.back()} size={40} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flex: 1, width: '100%', marginBottom:30}}>
                        <Text>Please leave your commenr or suggestion,</Text>
                        <Text>To receive a reply, Incluide your email.</Text>
                        <TextInput style={styles.textinputEmail} mode='outlined' label={"Email"} value={email} onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={{flex: 1, width:'100%'}}>
                        <TextInput style={styles.textinputComment} mode='outlined' label={"Comment"} value={comment} multiline onChangeText={text => setComment(text)} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '',
        width:'100%',
        alignContent:'flex-start',
        alignItems:'flex-start',
        padding: 15,
        flexDirection:'column',
        flex: 1,
    },
    textinputEmail:{
      fontWeight:'semibold',
      width:'100%',
      height: 60,
    },
    textinputComment:{
        fontWeight:'semibold',
        width:'100%',
        height: 500,
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
      },
  });