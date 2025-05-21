import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import users from '../../assets/data';
// import { CardProps } from 'react-native-elements';

interface CardProps{
  imgSource: any,
  name: string,
  onPress: any
}

const StoriesCard = ({imgSource, name, onPress}:CardProps) => {
  return (
    <Pressable style={styles.headerContainer} onPress={onPress}>
      <View style={styles.card}>
        <Image
        source={imgSource}
        style={styles.storyImage}
        />
        <Text style={styles.storyTitle}> {name}</Text>
        </View>
    </Pressable>
  )
}

export default StoriesCard

const styles = StyleSheet.create({

    headerContainer:{
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 7,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    card:{
flex: 1,
flexDirection:'column',
justifyContent: 'center',
alignItems:'center',
paddingVertical: 5,
marginVertical: 10,
gap: 5
// justifyContent: 'space-between'

    },
    storyTitle:{

    },

    storyImage:{
    height: 50,
    width: 50,
    marginVertical: 5,
    borderRadius: 50,
    }
})