import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StackNavigation';
type FullPostScreenProps = NativeStackScreenProps<RootStackParamList, 'FullPostScreen'>;

const FullPostScreen = ({route}:FullPostScreenProps) => {
    const{postTitle, postBody}= route.params
  return (
        <SafeAreaView style={styles.container}>
    
    <View style={styles.postContainer}>
      <Text style={styles.title}>{postTitle}</Text>
      <Text style={styles.body}>{postBody}</Text>

    </View>
        </SafeAreaView>
    
  )
}

export default FullPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
      },
      postContainer:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        // borderWidth:1,
        // borderColor: 'red',
        // paddingVertical: 30,
        paddingHorizontal: 20,
        margin: 20
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 30
      },
      body: {
        fontSize: 14,
        color: '#666',
      },
})