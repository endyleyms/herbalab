import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Detail = ({route}) => {
  const {group} = route.params;
  console.log(group)

  const image= group.image

  return (
    <View style={styles.container}>
        <Text style={styles.familia}>Familia: {group.familia}</Text>
        <Image 
        style={{ width: '50%', height: '30%', alignSelf: 'center' }}
        source={{uri: image}} />
        <Text style={styles.text}>Género: {group.genero}</Text>
        <Text style={styles.text}>Especie: {group.especie}</Text>
        <Text style={styles.text}>{group.description}</Text>
        <View style={styles.containerM}>
          <MapView 
          style={styles.map}
          region ={{
            latitude: group.ubication?.latitude,
            longitude: group.ubication?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          />
    </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        left: 30,
        
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
        paddingBottom: 5
    },
    familia:{
        backgroundColor: '#D2D9D2',
        width: '100%',
        height: '8%',
        padding: 10,
    },
    text:{
        width: '90%',
        left:20
    },
    containerM: {
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