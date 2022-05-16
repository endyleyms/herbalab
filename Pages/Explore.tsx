import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, doc } from 'firebase/firestore';
import firebaseModule from '../database/firebase'
import Collection from '../Components/Collection'

const Explore = () => {
  const [families, setFamilies] = useState([{}])
  async function getFamilia() {
    const familiaCol = collection(firebaseModule.db, "familia");
    const familiaSnapshot = await getDocs(familiaCol);
    console.log(familiaSnapshot)
    const familiaList= familiaSnapshot.docs.map(doc => doc.data());
    setFamilies(familiaList);
    console.log(familiaList)
    return familiaList
  }

  useEffect(()=> {
    getFamilia()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>
        {families.map((item)=> <Collection image={item.image} familia={item.familia}/>)}
      </ScrollView>
            
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: 30,
    top: 40,
    height: '100%'
  }
})

export default Explore