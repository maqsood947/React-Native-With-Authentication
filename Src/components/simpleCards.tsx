
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function SimpleCards() {
  return (
    <View>
    <Text style={styles.text}> Fixed Cards</Text>



 <View style={styles.CardsContainer}>
     <View style={[styles.Card , styles.CardOne]}><Text>red</Text></View>

     <View style={[styles.Card , styles.CardTwo]}><Text>blue</Text></View>
  

     <View style={[styles.Card , styles.CardThree]}><Text>Green</Text></View>
    

 </View>
 </View>

    )}

    const styles = StyleSheet.create({
        text:{
            color: 'white',
            backgroundColor: 'green',
            textAlign: 'center',
            padding: 5,
        
          },

        CardsContainer:{
            // flex: 1,
            flexDirection: 'row',
            backgroundColor: 'grey'
            
          
           }
           ,
           Card:{
            // flex: 1,
            textAlign: 'center',
          
            justifyContent: 'center',
            alignItems:'center',
             color: 'white',
            height: 120,
             width: 120,
             borderRadius: 5,
             margin:8,
           },
           CardOne:{
            backgroundColor: '#af1607',  
          
           },
          
           CardTwo:{
            backgroundColor: '#2337c6',  
          
           },
          
           CardThree:{
            backgroundColor: '#72bf6a',  
          
           },




    })
export default SimpleCards
