import { View, StyleSheet } from 'react-native'
import React from 'react'
import Search from '../Components/Search'
import Collection from '../Components/Collection'

const Explore = () => {
  return (
    <View style={styles.container}>
      <Search/>
      <Collection/>
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
  }
})

export default Explore