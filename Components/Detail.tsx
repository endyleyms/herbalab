import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { doc, getDoc} from 'firebase/firestore';
import firebaseModule from '../database/firebase'

const Detail = ({route}) => {
  const {group, item} = route.params;

  async function getFamilia() {
    const familiacolref = doc(firebaseModule.db, `/familia/${item.id}/grupos/${group.id}`);
      const grupoDoc = await getDoc(familiacolref);
      if (grupoDoc.exists()) {
        console.log("Document data:", grupoDoc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }
  const image= group.image
  
  useEffect(()=> {
    getFamilia()
  }, [])
  return (
    <View style={styles.container}>
        <Text style={styles.familia}>Familia: {group.familia}</Text>
        <Image 
        style={{ width: '50%', height: '50%', alignSelf: 'center' }}
        source={{uri: image}} />
        <Text style={styles.text}>Género: {group.genero}</Text>
        <Text style={styles.text}>Especie: {group.especie}</Text>
        <Text style={styles.text}>{group.description}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        position: 'relative',
        left: 30,
        top: 40,
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        marginVertical: 5,
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
    }
})