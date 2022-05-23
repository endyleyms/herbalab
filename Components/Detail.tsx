import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs} from 'firebase/firestore';
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
  
  useEffect(()=> {
    getFamilia()
  }, [])
  return (
    <View>
      <Text>{group.familia}</Text>
      <Text>{group.genero}</Text>
      <Text>{group.especie}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})