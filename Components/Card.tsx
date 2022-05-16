import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Search from './Search'

const Card = () => {

  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.cardPlants}>
        <Text style={styles.familia}>Familia</Text>        
        <View>
          <Text>Género:</Text>
          <Text>Especie:</Text>
        </View>
        <Text>Description</Text>
      </View>
    </View>
    
  )
}

const styles= StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: 30,
    top: 40,
    height: '50%'
  },
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
    alignItems: 'center',
    
  }
})

export default Card