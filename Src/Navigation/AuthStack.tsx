import React from 'react'
import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';

export type AuthStackParamList={
  LoginScreen: undefined,
  SignupScreen: undefined,

}
const Stack = createNativeStackNavigator<AuthStackParamList>()
export default function AuthStack ()  {
  return (

  <Stack.Navigator initialRouteName='LoginScreen'>
    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    <Stack.Screen name='SignupScreen' component={SignupScreen}/>

    




    
  </Stack.Navigator>

  )
}
 

const styles = StyleSheet.create({})