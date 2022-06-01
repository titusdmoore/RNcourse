import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

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

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} placeholder="New Goal" submitText="Add Goal" />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
