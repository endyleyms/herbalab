import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { collection, getDocs, doc } from 'firebase/firestore';
import firebaseModule from '../database/firebase'

const Information = () => {
  async function getFamilia() {
    const familiaCol = collection(firebaseModule.db, "familia");
    const familiaSnapshot = await getDocs(familiaCol);
    console.log(familiaSnapshot)
    familiaSnapshot.forEach(async(familia)=>{
      const familiacolref = collection(firebaseModule.db, `familia/${familia.id}/grupos`);
      const grupoDoc = await getDocs(familiacolref);
      console.log('grupo doc',grupoDoc)
      grupoDoc.forEach((item) => console.log(item.data()));
    })
  }

  useEffect(()=> {
    getFamilia()
  }, [])

  return (
    <View>
      <Text>Mapa</Text>
      <Text>Lista de especies en forma de tabla</Text>
      <Text>en cada item debe ir un modal que deje visualizar las imágenes</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({})