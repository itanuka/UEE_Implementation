import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AddQuestionScreen from './AddQuestionScreen';
import MyQuestionListScreen from './MyQuestionListScreen';

const Stack = createNativeStackNavigator()

export default class AnukaRootNavigator extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
        <Stack.Screen name="MyQuestionListScreen" component={MyQuestionListScreen} />
      </Stack.Navigator>
    )
  }
}