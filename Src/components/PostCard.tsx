import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface PostCardProps{
    title: string,
    body: string
    onPress: ()=>void
}




const PostCard = ({title, body,onPress}: PostCardProps) => {
  return (

    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text>{body}</Text>
    </Pressable>

  )
}

export default PostCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height: 150,
        borderWidth: 1,
        borderColor:'grey',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 7,
        borderRadius: 10,
        
    },
    postTitle:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green'
    }
})