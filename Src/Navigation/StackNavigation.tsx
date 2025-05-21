import React from 'react'
import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ChatsScreen from '../Screens/ChatsScreen';
import ShowProfileScreen from '../Screens/ShowProfileScreen';
import ChatsStack from './ChatsStack';
import FullPostScreen from '../Screens/FullPostScreen';

export type RootStackParamList={
  HomeScreen: undefined,
  ChatsStack: undefined,
  ChatsScreen: undefined,

  ShowProfileScreen: {
    imgUrl: string,
    firstName: string,
    lastName:string
  },
  FullPostScreen: {
    postTitle: string,
    postBody: string
  }
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function StackNavigation ()  {
  return (

  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='ChatsStack' component={ChatsStack}/>
    <Stack.Screen name='FullPostScreen' component={FullPostScreen}/>



    
  </Stack.Navigator>

  )
}
 

const styles = StyleSheet.create({})