import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StackNavigation';

type ShowProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'ShowProfileScreen'>;

const ShowProfileScreen = ({ route }: ShowProfileScreenProps) => {
  const { firstName, lastName, imgUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
    </View>
  );
};

export default ShowProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
