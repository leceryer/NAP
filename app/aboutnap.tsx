import * as React from 'react';
import { router } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Appbar, Icon, MD3Colors, Divider } from "react-native-paper";

export default function aboutnapScreen() {
  return (
    <SafeAreaView>
      {/* Fixed Back Button */}
      <Appbar.BackAction
        onPress={() => router.back()} // Navigates to the previous screen
        size={25}
        style={styles.fixedBackButton} // Ensures consistent styling
      />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Header Section */}
          <Text style={styles.headerContainer}>
            <Icon source={"alert-circle"} color={MD3Colors.error0} size={23} />{" "}
            About NAP{" "}
            <Icon source={"alert-circle"} color={MD3Colors.error0} size={23} />
          </Text>
        </View>

        {/* Divider to visually separate sections */}
        <View>
          <Divider horizontalInset style={styles.divider} />
        </View>

        {/* Main Content Section */}
        <View style={styles.contentContainer}>
          {/* Descriptive content about NAP */}
          <Text style={styles.content}>
            Are you interested in learning more about parliamentary procedure?
          </Text>
          <Text></Text>
          <Text style={styles.content}>
            Would you like to exercise your skills as an officer in an
            organization, practice facilitating meetings effectively, or become
            a more effective participant in and contributor to meetings?
          </Text>
          <Text></Text>
          <Text style={styles.content}>NAP can help you achieve these goals.</Text>
          <Text></Text>
          <Text style={styles.content}>
            NAP offers two levels of membership: provisional and regular.
          </Text>
          <Text></Text>
          <Text style={styles.content}>
            Provisional membership is for those who are interested in learning
            about parliamentary procedure, but do not yet have enough knowledge
            to feel comfortable taking the NAP membership examination.
          </Text>
          <Text></Text>
          <Text style={styles.content}>
            Regular members receive all of the standard benefits of NAP
            membership after demonstrating basic knowledge of parliamentary
            principles by completing a diagnostic quiz related to parliamentary
            procedure.
          </Text>
          <Text></Text>
          <Text style={styles.content}>
            Many NAP members progress to either Registered Parliamentarian or
            Professional Registered Parliamentarian status through NAP’s
            accreditation programs.
          </Text>
          <Text></Text>
          <Text style={styles.content}>
            Download the application now and visit our FAQ if you have more
            questions about NAP membership.
          </Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Styles for the main container of the header
  container: {
    backgroundColor: '',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  // Styles for the header text
  headerContainer: {
    backgroundColor: '',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 25,
  },
  // Styles for the main content container
  contentContainer: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  // Styles for the content text
  content: {
    fontSize: 20,
  },
  // Styles for the divider separating sections
  divider: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
  },
  // Styles for the fixed back button
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 30, // Distance from the top of the screen
    left: 10, // Distance from the left of the screen
    zIndex: 10, // Ensures it stays on top of other elements
    backgroundColor: '#2986cc',
    color: 'white',
  },
  // Styles for the scrollable content container
  scrollContainer: {
    marginTop: 70, // Leaves space for the fixed back button
    paddingHorizontal: 10, // Adds horizontal padding
  },
});
