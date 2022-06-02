import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

export default GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const { onAddGoal, placeholder, submitText, showModal, modalToggle } = props;

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        modalToggle();
        setEnteredGoalText("");
    }

    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholder={placeholder}
                    style={styles.textField}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button title="Cancel" color={"red"} onPress={modalToggle} />
                    </View>
                    <View style={styles.button} >
                        <Button title={submitText} onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#412291'
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 16,
    },
    textField: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    button: {
        flexBasis: '50%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    }
});