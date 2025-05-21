import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../components/PostCard';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = ({ navigation }: HomeProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [postTitle, setPostTitle]= useState(" ")
  const [postBody, setPostBody]= useState(" ")


  const fetchData = async (limit = 20) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      
      const data = await response.json();
      setPostList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const AddPost= async () =>{
const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  method: 'POST',
  headers: {
    "Content-Type": " application/json"
  },
  body: JSON.stringify({
    title: postTitle,
    body: postBody
  })
})

const newPost = await response.json()
setPostList([newPost, ...postList])
setPostBody(" ")
setPostTitle(" ")



}
  useEffect(() => { 

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View>
        
      <View style={styles.inputContainer}>
<TextInput placeholder='title' value={postTitle} style={styles.titleStyle} onChangeText={setPostTitle} placeholderTextColor={'black'} />
<TextInput placeholder='Body' value={postBody} style={styles.bodyStyle} onChangeText={setPostBody} />
<Button title='Add post' onPress={AddPost}/>


      </View>
        <FlatList
          data={postList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard 
            title={item.title} 
            body={item.body}
             onPress={()=>navigation.navigate('FullPostScreen', {postTitle: item.title, postBody: item.body})} />
          )}
          ListHeaderComponent={<Text style={{backgroundColor: 'green', alignSelf: 'center', color:'#ffff', padding: 20}}>Posts</Text>}       />

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  postCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
  inputContainer:{
borderWidth: 1,
borderColor: 'grey',
margin: 10,
padding:16
  },
  titleStyle:{
    borderWidth: 1,
    borderColor: 'black',
    margin: 3
  },
  bodyStyle:{
    margin: 3,

      borderWidth: 1,
    borderColor: 'black'
  }

});