import * as React from 'react';
import { router } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-paper';



//Menu buttons from homescreen
export default function Menu(){
  return(
    //backbutton
    //Follow the (About NAP) button for routing to another page
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => alert("Pressed")}>
          <Text style={styles.buttonText}>Self-Study Quiz</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={() => alert("Pressed")}>
          <Text style={styles.buttonText}>Vote Calculator</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={() => alert("Pressed")}>
          <Text style={styles.buttonText}>Tellers Report</Text>
        </Pressable>
        <Pressable style={styles.buttonFeedback} onPress={() => alert("Pressed")}>
          <Text style={styles.buttonText}>Feedback</Text>
        </Pressable>
        <Pressable style={styles.buttonHelp} onPress={() => router.push("/help")}>
          <Text style={styles.buttonText}>Help</Text>
        </Pressable>
      </View>
      <Divider bold horizontalInset style={styles.divider}/>
      <View style={styles.container}>
          <Pressable style={styles.buttonAboutNap} onPress={() => router.push('/aboutnap')}>
            <Text style={styles.buttonText}>About NAP</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    alignItems:'center'
  },
  buttons:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#f5d9d9',
    paddingTop:35,
    paddingBottom:35,
    paddingHorizontal: 120,
    borderRadius: 20,
    marginTop:20,
    elevation: 15,
  },
  buttonText:{
    fontSize:17,
  },
  buttonAboutNap:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#2986cc',
    paddingTop:35,
    paddingBottom:35,
    paddingHorizontal: 120,
    borderRadius: 20,
    marginTop:20,
    elevation: 15,
  },
  buttonFeedback:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#f5d9d9',
    paddingTop:35,
    paddingBottom:35,
    paddingHorizontal: 135,
    borderRadius: 20,
    marginTop:20,
    elevation: 15,
  },
  buttonHelp:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#f5d9d9',
    paddingTop:35,
    paddingBottom:35,
    paddingHorizontal: 150,
    borderRadius: 20,
    marginTop:20,
    elevation: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  
});