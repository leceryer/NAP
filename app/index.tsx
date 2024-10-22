import * as React from 'react'
import {StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Menu from '@/components/Menu';
import { Appbar } from 'react-native-paper';
import { router } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={styles.container}>
        <Menu/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    alignContent:'center',
    alignItems:'center',
    padding: 15,
    flex: 1,
  },
});
