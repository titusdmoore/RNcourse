import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
    enteredText = ""
  }

  const addGoalHandler = () => {
    setGoalsList(currentGoals => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='New Goal'
          style={styles.textField}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goalsList.map((goal, index) => {
            return (
              <View style={styles.goalItemContainer}>
                <Text style={styles.goalItemText} key={goal.concat('-', index)}>{goal}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  textField: {
    width: '70%',
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 8,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  goalsContainer: {
    flex: 5,
  },
  goalItemContainer: {
    backgroundColor: 'blue',
    marginBottom: 5,
    padding: 10,
    borderRadius: 3
  },
  goalItemText: {
    color: 'white'
  },
  flexBreak: {
    flexBasis: '100%'
  }
});
