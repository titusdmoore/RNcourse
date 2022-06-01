import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const { onAddGoal, placeholder, submitText } = props;

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.textField}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title={submitText} onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
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
});