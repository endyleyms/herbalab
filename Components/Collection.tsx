import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Collection = ({familia, image, item}) => {
  const navigation = useNavigation();
   
  return (
    <View style={styles.cardPlants} >
      <Pressable onPress={() => navigation.navigate('Information', {
        familia,
        item
      })}>
       <Text style={styles.familia}>{familia}</Text>
      <Image 
      style={{ width: '50%', height: '50%', alignSelf: 'center', padding: 40 }}
      source={{uri: image}} /> 
      </Pressable>
      
    </View>
  )
}
const styles= StyleSheet.create({
  cardPlants:{
    display: 'flex',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '70%',
    height: '8%',
    left: 20,
    marginVertical: 5,
    borderRadius: 5,
    paddingBottom: 5
  },
  familia:{
    backgroundColor: '#BCD4BF',
    width: '100%',
    height: '35%',
    padding: 10,
  },
  text:{
    alignSelf: 'center'

  }
})
export default Collection