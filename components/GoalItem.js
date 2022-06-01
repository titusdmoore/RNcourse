import { StyleSheet, Text, View, Pressable } from 'react-native';

export default GoalItem = (props) => {
    const { text, onDelete, courseId } = props;

    return (
        <View style={styles.goalItemContainer}>
            <Pressable onPress={onDelete.bind(this, courseId)} android_ripple={{ color: '#dddddd' }}>
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItemContainer: {
        backgroundColor: 'red',
        marginBottom: 5,
        borderRadius: 3
    },
    goalItemText: {
        color: 'white',
        padding: 10,
    },
});