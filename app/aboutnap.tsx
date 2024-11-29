import * as React from 'react';
import { router } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Appbar, Icon, MD3Colors, Divider} from "react-native-paper";

export default function aboutnapScreen(){
    return(
        //apply back button here
        <SafeAreaView>
        {/* Fixed Back Button */}
        <Appbar.BackAction
            onPress={() => router.back()}
            size={25}
            style={styles.fixedBackButton}
        />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <Text style={styles.headerContainer}><Icon source={"alert-circle"} color={MD3Colors.error0} size={23}/>  About NAP  <Icon source={"alert-circle"} color={MD3Colors.error0} size={23}/></Text>
                    </View>
                    <View>
                        <Divider horizontalInset style={styles.divider} />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>Are you interested in Learning more about parliamentary procedure?</Text>
                        <Text></Text>
                        <Text style={styles.content}>Would you like to exercise you skills as an officer in an organization, practice facilitating meetings effectively or become am ore effective participant in and contributor to meetings?</Text>
                        <Text></Text>
                        <Text style={styles.content}>NAP can help you achieve these goals.</Text>
                        <Text></Text>
                        <Text style={styles.content}>NAP offers two levels of membership: provisional and regular.</Text>
                        <Text></Text>
                        <Text style={styles.content}>Provisional membership is for those who are interested in learning about parliamentary procedure, but do not yet have enough knowledge to feel comfortable taking the NAP membership examination.</Text>
                        <Text></Text>
                        <Text style={styles.content}>Regular member receive all of the standard benefits of NAP membership after demonstrating basic knowledge of parliamentary principles by completing a diagnostic quiz related to parliamentary procedure.</Text>
                        <Text style={styles.content}>Many NAP members progress to either Registered Parliamentarian or Professional Registered Parliamentarian status through NAPs accreditation programs.</Text>
                        <Text></Text>
                        <Text style={styles.content}>Download the application now and visit our FAQ if you have more questions about NAP membership</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '',
        alignContent:'center',
        alignItems:'center',
        padding: 15,
    },
    headerContainer:{
      backgroundColor: '',
      alignContent:'center',
      alignItems:'center',
      padding: 15,
      fontSize: 25,
    },
    contentContainer:{
        alignContent:'flex-start',
        alignItems:'flex-start',
        padding: 20,
    },
    content:{
        fontSize:20,
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
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