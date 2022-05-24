import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import React from 'react'

const Maps = () => {
  
  return (
    <View style={styles.container}>
      <MapView 
      // provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 4.729614,
        longitude: -74.168001,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'90%',
    height: '90%'
  },
})