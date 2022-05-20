import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Collection = ({familia, image, item}) => {
  const navigation = useNavigation();
   
  return (
    <View style={styles.cardPlants}>
      <Text style={styles.familia} onPress={() => navigation.navigate('Information', {
        familia,
        item
      })}>{familia}</Text>
      <Image 
      style={{ width: '80%', height: '50%', alignSelf: 'center', padding: 30 }}
      source={{uri: image}} />
      <Text style={styles.text}>Número</Text>
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
    height: '15%',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    paddingBottom: 5
  },
  familia:{
    backgroundColor: '#BCD4BF',
    width: '100%',
    height: '20%',
    padding: 10,
  },
  text:{
    alignSelf: 'center'

  }
})
export default Collection