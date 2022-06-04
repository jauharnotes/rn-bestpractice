// import Tag from './basic/tag';
import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((prev) => [
      ...prev,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  }
  return (
    <View style={style.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={style.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    // backgroundColor: 'green'
  },
});
