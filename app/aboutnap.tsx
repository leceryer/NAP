import { router } from "expo-router";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function aboutnapScreen(){
    return(
        //apply back button here
        <View>
            <Appbar.BackAction onPress={() => router.back()}/>
            <Text>About Page</Text>
        </View>
    );
};