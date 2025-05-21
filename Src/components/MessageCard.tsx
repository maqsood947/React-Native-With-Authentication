import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface CardProps{
    imgSource: {
        uri: string
    }
    
    name: string,
    message: string
  }


const MessageCard = ({ imgSource, name,message }:CardProps) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.card}>
        <Image
        source={imgSource}
        style={styles.storyImage}
        />
        <View style={styles.msgContainer}>
        <Text style={styles.storyTitle}>{name}</Text>
        <Text style={styles.storyMsg}>{message}</Text>
        </View>
        </View>
    </Pressable>
  )
}

export default MessageCard

const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'green',
        paddingHorizontal: 20
        
    },
    card:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:5
            
            },
  
        
            storyImage:{
            height: 50,
            width: 50,
            marginVertical: 5,
            borderRadius: 50,
            },
            storyMsg:{},
            storyTitle:{
                fontSize: 16,
                fontWeight:'500'
            },
            msgContainer:{
                flex: 1,
                flexDirection:'column',
        paddingHorizontal: 15
            }
})