import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { DataTable, Appbar } from 'react-native-paper';

// Set initial choices
const VoteApp = () => {
  // State to manage the voting choices
  const [choices, setChoices] = useState([
    { name: 'Yes', count: '', percent: 0 },
    { name: 'No', count: '', percent: 0 },
    { name: 'Illegal Votes', count: '', percent: 0 },
  ]);

  // State to track the total number of votes
  const [totalVotes, setTotalVotes] = useState(0);

  // Add a new choice row (excluding "Illegal Votes")
  const addChoice = () => {
    const updatedChoices = [...choices];
                                                                                  // Insert a new choice before the "Illegal Votes" row
    updatedChoices.splice(updatedChoices.length - 1, 0, {
      name: '',
      count: '',
      percent: 0,
    });
    setChoices(updatedChoices);                                                   // Update the state with the new choices
  };

  // Update the vote count and recalculate percentages
  const handleCountChange = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index].count = value;                                          // Update the count for the specified choice

    // Calculate the total votes (excluding "Illegal Votes")
    const total = updatedChoices.reduce((sum, choice) => {
      if (choice.name === 'Illegal Votes') return sum;                            // Skip "Illegal Votes"
      return sum + (parseInt(choice.count) || 0);                                 // Sum valid counts
    }, 0);

    setTotalVotes(total); // Update the total votes state

    // Update percentages for each choice
    updatedChoices.forEach((choice) => {
      if (choice.name === 'Illegal Votes') {
        choice.percent = 0;                                                       // No percentage for "Illegal Votes"
      } else {
        choice.percent = total > 0
          ? (parseInt(choice.count) || 0) / total * 100
          : 0;                                                                    // Calculate the percentage
      }
    });

    setChoices(updatedChoices);                                                   // Update the state with new percentages
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed Back Button */}
      <Appbar.BackAction
        onPress={() => router.back()}                                             // Navigates to the previous screen
        size={25}
        style={styles.fixedBackButton}
      />

      {/* KeyboardAvoidingView for screen adjustment when the keyboard is open */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}              // Adjust behavior based on platform
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* DataTable for displaying choices, counts, and percentages */}
          <DataTable>
            {/* Table header */}
            <DataTable.Header>
              <DataTable.Title style={styles.choiceColumn}>Choice</DataTable.Title>
              <DataTable.Title style={styles.voteCountColumn} numeric>Vote Count</DataTable.Title>
              <DataTable.Title style={styles.votePercentColumn} numeric>Vote Percent</DataTable.Title>
            </DataTable.Header>

            {/* Render each choice row */}
            {choices.map((choice, index) => (
              <DataTable.Row key={index}>
                {/* Editable text input for the choice name */}
                <DataTable.Cell style={styles.choiceColumn}>
                  <TextInput
                    style={styles.textInput}
                    value={choice.name}
                    placeholder={`Choice ${index + 1}`}
                    editable={choice.name !== 'Illegal Votes'}                // Disable editing for "Illegal Votes"
                    onChangeText={(text) => {
                      const updatedChoices = [...choices];
                      updatedChoices[index].name = text;                      // Update the name
                      setChoices(updatedChoices);
                    }}
                  />
                </DataTable.Cell>
                {/* Editable numeric input for the vote count */}
                <DataTable.Cell style={styles.voteCountColumn} numeric>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    value={choice.count}
                    placeholder="Enter votes here"
                    onChangeText={(text) => handleCountChange(index, text)}   // Update count and percentages
                  />
                </DataTable.Cell>

                {/*Dislay Calculated Percentage*/}
                <DataTable.Cell style={styles.votePercentColumn} numeric>
                  {choice.name === 'Illegal Votes'
                  ?'-'                                                      // Show a dash for "Illegal Votes" 
                  : `${choice.percent.toFixed(2)}%`}                        {/* Show percentage for other choices */}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            {/* Row for total votes */}
            <DataTable.Row>
              <DataTable.Cell style={styles.choiceColumn}>Total Votes</DataTable.Cell>
              <DataTable.Cell style={styles.voteCountColumn} numeric>
                {totalVotes}                                                {/* Display total vote count */}
              </DataTable.Cell>
              <DataTable.Cell style={styles.votePercentColumn} numeric>
                100%                                                        {/* Always display 100% for total row */}
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          {/* Add Choice Button */}
          <View style={{ marginTop: 20 }}>
            <Button title="Add Choice" onPress={addChoice} /> {/* Adds a new choice */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 50, // Distance from the top of the screen
    left: 10, // Distance from the left edge
    zIndex: 10, // Ensures it stays on top
    backgroundColor: '#2986cc',
    color: 'white',
  },
  scrollContainer: {
    marginTop: 60, // Adjust the scroll content to leave space for the back button
    paddingHorizontal: 10, // Add some horizontal padding
  },
  choiceColumn: {
    flex: 2, // Set relative width for choice column
    justifyContent: 'center', // Center align text vertically
  },
  voteCountColumn: {
    flex: 1, // Set relative width for vote count column
    justifyContent: 'center',
    alignItems: 'center',
  },
  votePercentColumn: {
    flex: 1, // Set relative width for vote percent column
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 5, // Add padding inside the input
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#ccc', // Set border color
    textAlign: 'center', // Center align text horizontally
  },
});

export default VoteApp;