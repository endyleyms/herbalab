import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Collection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardPlants}>
      <Text style={styles.familia} onPress={() => navigation.navigate('Card')}>Familia</Text>
      <Image 
      style={{ width: '80%', height: '70%', alignSelf: 'center' }}
      source={{uri: "https://cifras.biodiversidad.co/img/angiospermas.png"}} />
      <Text style={styles.text}>Número</Text>
    </View>
  )
}
const styles= StyleSheet.create({
  cardPlants:{
    alignContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  familia:{
    backgroundColor: '#BCD4BF',
    width: '100%',
    height: '20%',
    padding: 10,
  },
  text:{
    alignSelf: 'center'

  }
})
export default Collection