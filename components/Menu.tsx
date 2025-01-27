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
        <Pressable style={styles.buttons} onPress={() => alert("Coming Soon...")}>
          <Text style={styles.buttonText} numberOfLines={1}>Self-Study Quiz</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={() => router.push('/tellersreport')}>
          <Text style={styles.buttonText} numberOfLines={1}>Tellers Report</Text>
        </Pressable>
        <Pressable style={styles.buttonFeedback} onPress={() => router.push('/feedback')}>
          <Text style={styles.buttonText} numberOfLines={1}>Feedback</Text>
        </Pressable>
        <Pressable style={styles.buttonHelp} onPress={() => router.push("/help")}>
          <Text style={styles.buttonText} numberOfLines={1}>Help</Text>
        </Pressable>
        </View>
        <Divider horizontalInset style={styles.divider}/>
        <View style={styles.container}>
          <Pressable style={styles.buttonAboutNap} onPress={() => router.push('/aboutnap')}>
            <Text style={styles.buttonText} numberOfLines={1}>About NAP</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    alignItems:'center',
  },
  buttons:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#e0d8ec',
    paddingTop:15,
    paddingBottom:15,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginTop:20,
    elevation: 10,
  },
  buttonText:{
    fontSize:17,
  },
  buttonAboutNap:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#2986cc',
    paddingTop:15,
    paddingBottom:15,
    paddingHorizontal: 120,
    borderRadius: 20,
    marginTop:20,
    elevation: 10,
  },
  buttonFeedback:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#e0d8ec',
    paddingTop:15,
    paddingBottom:15,
    paddingHorizontal: 115,
    borderRadius: 20,
    marginTop:20,
    elevation: 10,
  },
  buttonHelp:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#e0d8ec',
    paddingTop:15,
    paddingBottom:15,
    paddingHorizontal: 135,
    borderRadius: 20,
    marginTop:20,
    elevation: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  
});