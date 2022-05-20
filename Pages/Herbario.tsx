import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Search from '../Components/Search';
import Register from '../Components/Register';

const Herbario = () => {
  return (
    <View style={styles.container}>
      <Register/>
    </View>
  )
}

export default Herbario

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  }
})