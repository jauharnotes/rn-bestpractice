import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tag() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another place of text</Text>
      </View>
      <Text style={{ margin: 16, borderWidth: 2, borderColor: 'green', padding: 5 }}>Hello Jauhar</Text>
      <Button title='Tap Me!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 5,
  }
});
