import * as React from 'react';
import { Stack } from "expo-router";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Icon, MD3Colors } from 'react-native-paper';

//Custom Headers in order to interact with header height, since I cant access the attribute unlike whats posted on the internet forums
function CustomHeaderHome() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headertitle}>National Association of Parliamentarians</Text>
    </SafeAreaView>
  );
}

// style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}
function CustomHeaderAbout() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View>
        {/* <Text style={styles.headertitle}>
          <Icon source={"alert-circle"} color={MD3Colors.error0} size={23}/>About NAP <Icon source={"alert-circle"} color={MD3Colors.error0} size={23}/>  
        </Text> */}
      </View>
    </SafeAreaView>
  );
}

//Add the pages to the 'Stack', then insert the custom header. We might need to folder some cards if a menu button has more than 1 needed pages
//to route to folder syntax for folder is (foldername), i think.

export default function RootLayout(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{header: () => <CustomHeaderHome/>}}/>
      <Stack.Screen name="aboutnap" options={{header: () => <CustomHeaderAbout/>, headerShown:true}}/>
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: '#6495ed',
    padding: 20,
    alignContent:'center',
    alignItems:'center',
    height:110,
  },
  headertitle:{
    color: 'black',
    fontSize: 20,
    fontWeight:'semibold',
    paddingTop:40
  },
});