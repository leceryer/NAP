import { Stack } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

//Custom Headers in order to interact with header height, since I cant access the attribute unlike whats posted on the internet forums
function CustomHeaderHome() {
  return (
    <SafeAreaView style={{ backgroundColor: '#6495ed', padding: 20, alignContent:'center', alignItems:'center',height:110}}>
      <Text style={{ color: 'black', fontSize: 20, fontWeight:'semibold', paddingTop:40}}>National Association of Parliamentarians</Text>
    </SafeAreaView>
  );
}

function CustomHeaderAbout() {
  return (
    <SafeAreaView style={{ backgroundColor: '#6495ed', padding: 20, alignContent:'center', alignItems:'center',height:110}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={{ color: 'black', fontSize: 20, fontWeight:'semibold', paddingTop:40 }}>About NAP</Text>
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
      <Stack.Screen name="aboutnap" options={{header: () => <CustomHeaderAbout/>}}/>
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
};