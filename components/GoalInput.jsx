import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          placeholder='Your coure goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
})

export default GoalInput;