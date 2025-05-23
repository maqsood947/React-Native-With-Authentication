import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'red'}/>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})