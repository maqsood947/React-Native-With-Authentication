import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppwriteContext } from '../appwrite/AppwriteContext'
import Snackbar from 'react-native-snackbar'


const AboutScreen = () => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)
  const handleLogout = () => {
    appwrite.logout()
    .then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT
      })
    })
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={{color: 'white'}}>Logout</Text>
      </Pressable>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logoutBtn: {
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        elevation: 5
      }
})