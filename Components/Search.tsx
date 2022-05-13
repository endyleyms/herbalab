import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'

export default function Search () {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={styles.container1}>
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
  container1:{
    flex: 1,
    flexDirection: 'row',
  },
  container:{
    position: 'relative',
    left: 20,
    top: 40,
    backgroundColor: 'white',
    width: '80%',
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
