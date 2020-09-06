import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    return (
        <View style={styles.inputWrapper}>
            <TextInput 
                style={styles.textInput}
                placeholder="Course Goal"
                onChangeText= {goalInputHandler} 
                value = {enteredGoal}
            />
            <Button title="ADD" onPress = {props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
    } 
})
export default GoalInput