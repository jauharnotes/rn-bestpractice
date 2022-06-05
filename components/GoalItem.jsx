import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={style.todo}>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{ color: '#d6d2d2dd' }}
    style={({ pressed }) => pressed && style.pressedItem}> 
        <Text style={style.todoText}>{props.text}</Text>
    </Pressable>
      </View>
  );
}

export default GoalItem;

const style = StyleSheet.create({
  todo: {
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: '#2ab7ca',
  },
  todoText: {
    color: '#ffff',
    padding: 8,
  },
  pressedItem: {
    color: '#d6d2d2dd',
  }
});
