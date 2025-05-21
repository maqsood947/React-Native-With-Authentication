import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import ShowProfileScreen from '../Screens/ShowProfileScreen';
import TestScreen from '../Screens/SignupScreen';
import SecondTestScreen from '../Screens/LoginScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TestScreen" component={TestScreen} />
      <Drawer.Screen name="SecondTestScreen" component={SecondTestScreen} />
    </Drawer.Navigator>
  );
}