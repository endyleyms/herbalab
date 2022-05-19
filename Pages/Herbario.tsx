import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card'
import Search from '../Components/Search';

const Herbario = () => {
  return (
    <View style={styles.container}>
      <Search/>
      <Text>Mapa</Text>
      <Card familia={undefined} genero={undefined} especie={undefined}/>
    </View>
  )
}

export default Herbario

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: 30,
    top: 40,
    height: '100%'
  }
})