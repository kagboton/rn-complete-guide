import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle } 
    ]);
  }

  return (
    <View style={styles.root}>

      <GoalInput onAddGoal = {addGoalHandler}/>
      
      <FlatList 
      keyExtractor = {(item, index) => item.id}
        data = {courseGoals} 
        renderItem = {itemData => (
          <GoalItem title = {itemData.item.value} />
        )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  root : {
    padding : 50
  },
  
 
});