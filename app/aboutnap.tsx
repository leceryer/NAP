import * as React from 'react';
import { router } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Appbar, Icon, MD3Colors, Divider} from "react-native-paper";

export default function aboutnapScreen(){
    return(
        //apply back button here
        <SafeAreaView>
                <ScrollView>
                    <Appbar.BackAction onPress={() => router.back()} size={40}/>
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
        backgroundColor: 'white',
        alignContent:'center',
        alignItems:'center',
        padding: 15,
    },
    headerContainer:{
      backgroundColor: 'white',
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
  });