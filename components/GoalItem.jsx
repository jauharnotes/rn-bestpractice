import { StyleSheet, View, Text } from "react-native";

function GoalItem({ text }) {
    return (
        <View style={style.todo}>
        <Text style={style.todoText}>{text}</Text>
      </View>
    )
}

export default GoalItem;

const style = StyleSheet.create({
    todo: {
        padding: 8,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: 'red',
      },
      todoText: {
        color: '#ffff',
      },
})