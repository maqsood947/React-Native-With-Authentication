import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

interface compProps{
  userName: string;
  iconName: string

}


const Header = ({userName, iconName}: compProps) => {
  return (

    <View style={styles.headerContainer}>

          <Text style={styles.heading}>{userName} </Text>

      <Icon name={iconName} size={22} color="#900" /> 
</View>
  )
}
export default Header

const styles = StyleSheet.create({

    headerContainer:{
        flex: 1,
        flexDirection:"row",
      alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    heading:{
        fontWeight: '500',
        fontSize: 24,
    },

})