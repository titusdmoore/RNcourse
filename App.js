import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='New Goal' style={styles.textField} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List Of Goals...</Text>
        <View style={styles.goalCard}>
          <Text>Finish Course</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textField: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  goalCard: {
    backgroundColor: 'blue',
    color: 'white',
  }
});
