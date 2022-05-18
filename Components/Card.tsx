import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({familia, genero, especie}) => {
  
  return (
    <View style={styles.cardPlants}>
      <Text style={styles.familia}>{familia}</Text>   
      <Text>Sección de imagenes</Text>     
      <View>
        <Text>Género: {genero}</Text>
        <Text>Especie: {especie}</Text>
      </View>
    </View>

    
  )
}

const styles= StyleSheet.create({
  cardPlants:{
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: '30%',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    paddingBottom: 5
  },
  familia:{
    backgroundColor: '#BCD4BF',
    width: '100%',
    height: '40%',
    padding: 5,    
  }
})

export default Card