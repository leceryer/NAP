import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { DataTable, Appbar } from 'react-native-paper';

const VoteApp = () => {
  const [choices, setChoices] = useState([
    { name: 'Yes', count: '', percent: 0 },
    { name: 'No', count: '', percent: 0 },
    { name: 'Illegal Votes', count: '', percent: 0 }
  ]);

  const [totalVotes, setTotalVotes] = useState(0);

  const addChoice = () => {
    setChoices([...choices, { name: '', count: '', percent: 0 }]);
  };

  const handleCountChange = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index].count = value;
    
    // Calculate total votes
    const total = updatedChoices.reduce((sum, choice) => sum + (parseInt(choice.count) || 0), 0);
    setTotalVotes(total);

    // Calculate percentages
    updatedChoices.forEach(choice => {
      choice.percent = total > 0 ? (parseInt(choice.count) || 0) / total * 100 : 0;
    });
    setChoices(updatedChoices);
  };

  return (
    <SafeAreaView>
      {/* Back Button */}
      <Appbar.BackAction onPress={() => router.back()} size={40} />
      
      <ScrollView>
        <DataTable>
          {/* Table Header */}
          <DataTable.Header>
            <DataTable.Title numeric>Choice</DataTable.Title>
            <DataTable.Title numeric>Vote Count</DataTable.Title>
            <DataTable.Title numeric>Vote Percent</DataTable.Title>
          </DataTable.Header>

          {/* Dynamic Rows for Choices */}
          {choices.map((choice, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>
                <TextInput
                  value={choice.name}
                  placeholder={`Choice ${index + 1}`} // Placeholder for choice name
                  onChangeText={(text) => {
                    const updatedChoices = [...choices];
                    updatedChoices[index].name = text;
                    setChoices(updatedChoices);
                  }}
                />
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TextInput
                  keyboardType="numeric"
                  value={choice.count}
                  placeholder="Enter votes here" // Placeholder for vote count input
                  onChangeText={(text) => handleCountChange(index, text)}
                />
              </DataTable.Cell>
              <DataTable.Cell numeric>{choice.percent.toFixed(2)}%</DataTable.Cell>
            </DataTable.Row>
          ))}

          {/* Row for Total Votes */}
          <DataTable.Row>
            <DataTable.Cell>Total Votes</DataTable.Cell>
            <DataTable.Cell numeric>{totalVotes}</DataTable.Cell>
            <DataTable.Cell numeric>100%</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        {/* Add Choice Button */}
        <Button title="Add Choice" onPress={addChoice} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 20
  }
});

export default VoteApp;
