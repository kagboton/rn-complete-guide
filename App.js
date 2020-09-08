import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle } 
    ]);
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const addModeHandler = () => {
    setIsAddMode(true)
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.root}>

      <Button title = 'Add new goal' onPress={addModeHandler}/>
      <GoalInput onAddGoal = {addGoalHandler} visible = {isAddMode} onCancelGoal = {cancelGoalHandler}/>
      
      <FlatList 
      keyExtractor = {(item, index) => item.id}
        data = {courseGoals} 
        renderItem = {itemData => (
          <GoalItem
            onDelete = {removeGoalHandler} 
            title = {itemData.item.value} 
            id = {itemData.item.id}/>
        )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  root : {
    padding : 50
  },
  
 
});