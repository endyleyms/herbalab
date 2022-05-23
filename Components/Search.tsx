import { View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
import React from 'react'

export default function Search () {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View >
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  )
}