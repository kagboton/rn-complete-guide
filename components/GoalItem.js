import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
        <View style = {styles.listItems}>
            <Text>{props.title}</Text>
        </View>
    )
}

const  styles = StyleSheet.create(
    {
        listItems : {
            marginVertical : 10,
            padding : 10, 
            backgroundColor : '#ccc',
            borderColor : 'black',
            borderWidth: 1
        }
    }
    
)

export default GoalItem