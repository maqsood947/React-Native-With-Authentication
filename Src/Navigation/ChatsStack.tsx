import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './StackNavigation'
import ChatsScreen from '../Screens/ChatsScreen'
import ShowProfileScreen from '../Screens/ShowProfileScreen'
const Stack = createNativeStackNavigator<RootStackParamList>()

const ChatsStack = () => {
  return (

  <Stack.Navigator initialRouteName='ChatsScreen'>
    <Stack.Screen name='ChatsScreen' component={ChatsScreen}/>
    <Stack.Screen name='ShowProfileScreen' component={ShowProfileScreen}/>




    
  </Stack.Navigator>    
  )
}

export default ChatsStack

const styles = StyleSheet.create({})