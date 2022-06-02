import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, toggleModal] = useState(false);

  const addGoalHandler = (goalText) => {
    setGoalsList((currentGoals) => [...currentGoals, {
      id: Math.random().toString(),
      text: goalText
    }]);
  }

  const deleteGoalHandler = (id) => {
    setGoalsList(currentCourseGoals => {
      return currentCourseGoals.filter((courseGoal) => {
        return courseGoal.id != id
      });
    })
  }

  const modalToggle = () => {
    toggleModal((currentVisible) => !currentVisible);
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add Goal" color="#0910e3" onPress={modalToggle} />
        <GoalInput
          onAddGoal={addGoalHandler}
          placeholder="New Goal"
          submitText="Add Goal"
          showModal={showModal}
          modalToggle={modalToggle}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} courseId={itemData.item.id} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    marginTop: 5,
    flex: 5,
  },
});
