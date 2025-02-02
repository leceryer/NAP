import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function helpScreen() {
  return (
    <SafeAreaView>
      {/* Fixed Back Button */}
      <Appbar.BackAction
        onPress={() => router.back()} // Navigates back to the previous screen
        size={25}
        style={styles.fixedBackButton} // Custom style for the back button
      />

      {/* Scrollable Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          {/* Section: Self-Study Quiz */}
          <View style={styles.container}>
            <Text style={styles.headerContainer}>Self-Study Quiz</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              You can study for the NAP membership test by taking a quiz from randomly selected questions. 
              Also read *Roberts Rules of Order*, or *Roberts Rules in Brief*.
            </Text>
          </View>

          {/* Section: Vote Calculator */}
          <View style={styles.container}>
            <Text style={styles.headerContainer}>Vote Calculator</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Determine if a question is adopted or lost, based on Roberts Rules for calculating votes.
            </Text>
          </View>

          {/* Section: About NAP */}
          <View style={styles.container}>
            <Text style={styles.headerContainer}>About NAP</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Learn about the benefits of membership in the National Association of Parliamentarians (NAP).
            </Text>
          </View>

          {/* App Info and Support Section */}
          <View style={styles.contentContainer}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.content}>Version: 1.0.5</Text>
            <Text style={styles.content}>For support on this application contact:</Text>
            <Text style={styles.content}>support@cerenimbus.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // General container for each section
  container: {
    backgroundColor: '',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  // Styles for section headers
  headerContainer: {
    backgroundColor: '',
    alignContent: 'center',
    alignItems: 'center',
    padding: 1,
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: 'semibold',
  },
  // Container for descriptive text under each header
  contentContainer: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 1,
    paddingHorizontal: 20,
  },
  // Style for content text
  content: {
    fontSize: 20,
  },
  // Optional divider style if needed for sections
  divider: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
  },
  // Styles for the back button
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 30, // Distance from the top of the screen
    left: 10, // Distance from the left of the screen
    zIndex: 10, // Ensures it stays on top of other elements
    backgroundColor: '#2986cc',
    color: 'white',
  },
  // Style for the scrollable container
  scrollContainer: {
    marginTop: 70, // Leaves space for the back button
    paddingHorizontal: 10, // Adds horizontal padding
    paddingBottom: 100, // Ensures there's space at the bottom for scrolling
  },
});
