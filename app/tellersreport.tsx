import { router } from 'expo-router';
import React, { useState } from 'react';
import {TextInput,Button,ScrollView,SafeAreaView,StyleSheet,KeyboardAvoidingView,Platform,View,} from 'react-native';
import { DataTable, Appbar } from 'react-native-paper';

const VoteApp = () => {
  const [choices, setChoices] = useState([
    { name: 'Yes', count: '', percent: 0 },
    { name: 'No', count: '', percent: 0 },
    { name: 'Illegal Votes', count: '', percent: 0 },
  ]);

  const [totalVotes, setTotalVotes] = useState(0);

  const addChoice = () => {
    const updatedChoices = [...choices];
    updatedChoices.splice(updatedChoices.length - 1, 0, { name: '', count: '', percent: 0 });
    setChoices(updatedChoices);
  };

  const handleCountChange = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index].count = value;

    const total = updatedChoices.reduce((sum, choice, idx) => {
      if (choice.name === 'Illegal Votes') return sum;
      return sum + (parseInt(choice.count) || 0);
    }, 0);

    setTotalVotes(total);

    updatedChoices.forEach((choice) => {
      if (choice.name === 'Illegal Votes') {
        choice.percent = 0;
      } else {
        choice.percent = total > 0 ? (parseInt(choice.count) || 0) / total * 100 : 0;
      }
    });

    setChoices(updatedChoices);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed Back Button */}
      <Appbar.BackAction
        onPress={() => router.back()}
        size={25}
        style={styles.fixedBackButton}
      />

      {/* KeyboardAvoidingView for screen adjustment */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.choiceColumn}>Choice</DataTable.Title>
              <DataTable.Title style={styles.voteCountColumn} numeric>
                Vote Count
              </DataTable.Title>
              <DataTable.Title style={styles.votePercentColumn} numeric>
                Vote Percent
              </DataTable.Title>
            </DataTable.Header>

            {choices.map((choice, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.choiceColumn}>
                  <TextInput
                    style={styles.textInput}
                    value={choice.name}
                    placeholder={`Choice ${index + 1}`}
                    editable={choice.name !== 'Illegal Votes'}
                    onChangeText={(text) => {
                      const updatedChoices = [...choices];
                      updatedChoices[index].name = text;
                      setChoices(updatedChoices);
                    }}
                  />
                </DataTable.Cell>
                <DataTable.Cell style={styles.voteCountColumn} numeric>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    value={choice.count}
                    placeholder="Enter votes here"
                    onChangeText={(text) => handleCountChange(index, text)}
                  />
                </DataTable.Cell>
                <DataTable.Cell style={styles.votePercentColumn} numeric>
                  {choice.name === 'Illegal Votes' ? '-' : `${choice.percent.toFixed(2)}%`}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Row>
              <DataTable.Cell style={styles.choiceColumn}>Total Votes</DataTable.Cell>
              <DataTable.Cell style={styles.voteCountColumn} numeric>
                {totalVotes}
              </DataTable.Cell>
              <DataTable.Cell style={styles.votePercentColumn} numeric>
                100%
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <View style={{ marginTop: 20 }}>
            <Button title="Add Choice" onPress={addChoice} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fixedBackButton: {
    position: 'absolute', // Keeps the back button fixed
    top: 50, // Increased the distance from the top of the screen
    left: 10, // Distance from the left of the screen
    zIndex: 10, // Ensures it stays on top
    backgroundColor: '#2986cc',
    color:'white'
  },
  scrollContainer: {
    marginTop: 60, // Adjust the scroll content to leave space for the back button
    paddingHorizontal: 10, // Add some horizontal padding if needed
  },
  choiceColumn: {
    flex: 2,
    justifyContent: 'center',
  },
  voteCountColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  votePercentColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
});


export default VoteApp;
