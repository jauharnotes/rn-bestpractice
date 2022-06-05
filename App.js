// import Tag from './basic/tag';
import { useState } from 'react';
import { View, StyleSheet, FlatList, Button, StatusBar } from 'react-native';

import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((prev) => [
      ...prev,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoal((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  function starAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View style={style.appContainer}>
      <Button title='Add New Goal' color='#fe4a49' onPress={starAddGoalHandler}/>
      {modalVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onCancel={endAddGoalHandler}/>}
      <View style={style.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const style = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f4f4f8',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 30
    // backgroundColor: 'green'
  },
});
