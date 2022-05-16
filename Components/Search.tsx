import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Search () {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View >
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        value={searchQuery}
        onChangeText={(text) =>setSearchQuery(text)}
        placeholder="Search"
        />
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input:{
    height: 50
  },
})
