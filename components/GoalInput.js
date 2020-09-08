import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <Modal visible={props.visible} animationType = 'slide'>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Course Goal"
                    onChangeText= {goalInputHandler} 
                    value = {enteredGoal}
                />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title="CANCEL" color='red' onPress = {props.onCancelGoal}/>
                    </View>
                    <View style = {styles.button}>
                        <Button title="ADD" onPress = {addGoalHandler}/>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    inputWrapper : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    textInput : {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1, 
        padding: 10,
        marginBottom : 10
    }, 
    buttonContainer:{
        flexDirection: 'row',
        justifyContent : 'space-around',
        width: '60%' 
    },
    button : {
        width : '40%'
    }
})
export default GoalInput