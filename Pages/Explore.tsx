import { View, Text } from 'react-native'
import React from 'react'
import Search from '../Components/Search'
import Card from '../Components/Card'

const Explore = () => {
  return (
    <View>
      <Text>Explore colections</Text>
      <View>
        <Search />
      </View>
      <View>
        <Card />
      </View>
    </View>
  )
}

export default Explore