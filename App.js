import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputWrapper}>
        <TextInput 
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler} 
          value = {enteredGoal}
        />
        <Button title="ADD" onPress = {addGoalHandler}/>
      </View>
      <ScrollView >
        {courseGoals.map((goal)=><View key={goal} style = {styles.listItems}><Text >{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root : {
    padding : 50
  },
  inputWrapper : {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput : {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1, 
    padding: 10,
    marginLeft : 10
  }, 
  listItems : {
    marginVertical : 10,
    padding : 10, 
    backgroundColor : '#ccc',
    borderColor : 'black',
    borderWidth: 1

  }
});