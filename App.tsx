import { AppwriteContext, AppwriteProvider } from './Src/appwrite/AppwriteContext';
import { Router } from './Src/Navigation/Router';

export default function App() {
  return (
    <AppwriteProvider>
      <Router />
     </AppwriteProvider>
  );
}







// import {  StyleSheet, Text } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import StackNavigation, { RootStackParamList } from './Src/Navigation/StackNavigation';
// import TabNavigation from './Src/Navigation/TabNavigation';


// export default function App ()  {
//   return (
// <NavigationContainer>
// <TabNavigation/>
 
// </NavigationContainer>

//   )
// }
 

// const styles = StyleSheet.create({})