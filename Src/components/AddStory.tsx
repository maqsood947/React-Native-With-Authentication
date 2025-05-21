import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const AddStory = () => {
 const [modalVisible , setModalVisible] = useState(false)
   
  return (
    <Pressable 
    onPress={()=> setModalVisible(true)}
    style={styles.addBtn} >
        <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
    <View>

        <Text style={styles.modalText}>hello world</Text>
    </View>
    <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
        </Modal>

       <View style={styles.storyBtn}>
        <Text style={styles.add}>+</Text>
        </View>
        <Text >Add Story</Text>
        
    </Pressable>
  )
}



export default AddStory

const styles = StyleSheet.create({
addBtn:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5

    },

    storyBtn:{
    
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    marginVertical: 5


    }
,
add:{
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '200'

},

button: {
    width: 200,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText:{
    color: 'black',
    textAlign: 'center'
  }
})