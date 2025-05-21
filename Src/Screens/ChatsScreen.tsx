import React, { useState } from 'react'
import { StyleSheet, View, StatusBar,  FlatList} from 'react-native'
import users from '../../assets/data';
import {NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StackNavigation';
import AppModal from '../components/AppModal';
import Header from '../components/header';
import MessageCard from '../components/MessageCard';
import StoriesCard from '../components/StoriesCard';
// import Icon from 'react-native-vector-icons/Entypo'

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'ChatsScreen'>


const ChatsScreen = ({navigation}:ChatScreenProps) => {
const [modalVisible, setModalVisible]= useState(false)
  

  return (
    <View style={styles.container}>
           <StatusBar
          animated={true}
          backgroundColor="green"
        />
        <AppModal visibility={modalVisible} closeModal={()=>setModalVisible(false)} imageSrc={`${users[0].image}`}/>



<Header userName={users[1].firstName} iconName={'search1'}/>




<FlatList
  data={users}
  renderItem={({ item }) => <StoriesCard name={item.firstName} imgSource={{ uri: item.image }} onPress={() => navigation.navigate('ShowProfileScreen', {firstName: item.firstName, imgUrl: item.image, lastName: item.lastName })}/>} 
  keyExtractor={item=>item.phone}
  horizontal= {true}

/>


  <FlatList
  data={users}
  renderItem={({ item }) => <MessageCard name={item.firstName} imgSource={{ uri: item.image }} message={item.email} />} 
  keyExtractor={item=>item.phone}
  ListHeaderComponent={<Header iconName='search1' userName='chats'/>}
    stickyHeaderHiddenOnScroll={true}
showsHorizontalScrollIndicator={false}
  />

</View> 
  )}
export default ChatsScreen


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        paddingVertical: 10
    },

    storiesContainer:{

marginHorizontal: 10    }

})
