import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={style.inputContainer}>
      <Image style={style.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={style.textInput}
          placeholder='Your coure goal...'
          placeholderTextColor="#cac9c9"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={style.buttonWrapper}>
          <View style={style.btn}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#2ab7ca'/>
          </View>
          <View style={style.btn}>
            <Button title='Cancel' onPress={props.onCancel} color='#fed766'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fe4a49',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccc',
    backgroundColor: '#ff5b5b',
    color: '#ffff',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  btn: {
    padding: 8,
    width: 140,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default GoalInput;
