import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card'

const Herbario = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('Register')}>Crear nuevo registro</Text>
      <Text>Mapa</Text>
      <Card/>
    </View>
  )
}

export default Herbario