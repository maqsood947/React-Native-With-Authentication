import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import StackNavigation, { RootStackParamList } from './StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons'; 
import AboutScreen from '../Screens/AboutScreen';
import ChatsScreen from '../Screens/ChatsScreen';
import ChatsStack from './ChatsStack';



const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
    initialRouteName='StackNavigation'  
     
    screenOptions={{

      tabBarStyle:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderColor:"#02313b",
        marginBottom: 2,

   },
}}>
         
      <Tab.Screen name='StackNavigation' component={StackNavigation} 
      options={{
        headerShown: false,
        title:"",
        
        tabBarIcon: ({ focused }) => (

          <Icon 
            name={focused ?"home-sharp" :"home-outline"} 
            size={focused ? 30 :26} 
            color={"red"}
            style={{marginBottom:3}} 

          />
        ),  
              
      }}
      />
            <Tab.Screen name='ChatsStack' component={ChatsStack} 
      options={{
        headerShown: false,
        title:"",
        
        tabBarIcon: ({ focused }) => (

          <Icon 
            name={focused ? "chatbubble-ellipses-sharp":"chatbubble-ellipses-outline"} 
            size={focused ? 30 :26} 
            color={"red"}
            // style={{marginBottom:3}} 

          />
        ),  
              
      }}
      />
  



      <Tab.Screen name="AboutScreen" component={AboutScreen}   options={{
        title:"About",
        tabBarLabel:" ",
        headerShown: true,
        tabBarIcon: ({focused}) => (
        <Icon 
        name= {focused?"wallet": "wallet-outline"}
        size={focused ? 30 :26} 
        color={"red"}
      />)}}


      
      />
    </Tab.Navigator>
  )}


export default TabNavigation

const styles = StyleSheet.create({})