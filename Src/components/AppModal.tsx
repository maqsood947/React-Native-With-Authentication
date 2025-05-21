import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-elements';

interface ModalProps{
    visibility: boolean,
    closeModal: () => void;
    imageSrc?: string
    }
  

const AppModal=({visibility,closeModal, imageSrc}:ModalProps)=> {

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visibility}
    onRequestClose={closeModal}

    
 >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Image src={imageSrc} style={{height: 100, width: 100}}/>

        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
      </View>
   
    </View>
  </Modal>

  )
}

const styles = StyleSheet.create({

    centeredView: {
        // flex:1,
       
        // backgroundColor:'red',
display: 'flex',
justifyContent: 'center',
alignItems:'center',
verticalAlign:"middle"

    },
    modalView: {
        alignSelf: 'center',
        height: 500,
        width: 300,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      justifyContent:'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      borderWidth:1,
      borderColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
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
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
export default AppModal