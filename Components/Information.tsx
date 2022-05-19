import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore';
import firebaseModule from '../database/firebase'
import Card from './Card';
import Search from './Search';

const Information = () => {
  const [grupos, setgrupos] = useState([{}])
  async function getFamilia() {
    const familiaCol = collection(firebaseModule.db, "familia");
    const familiaSnapshot = await getDocs(familiaCol);
    console.log(familiaSnapshot)
    familiaSnapshot.docs.map(async(familia)=>{
      const familiacolref = collection(firebaseModule.db, `familia/${familia.id}/grupos`);
      const grupoDoc = await getDocs(familiacolref);
      const grupoList = grupoDoc.docs.map(doc => doc.data());
      setgrupos(grupoList);
      console.log(grupoList)
    })
  }

  useEffect(()=> {
    getFamilia()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Mapa</Text>
      <Search/>
      <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>
        {grupos.map((item)=> <Card familia={item.familia} genero={item.genero} especie={item.especie}/>)}
      </ScrollView>
      
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: 30,
    top: 40,
    height: '100%'
  }
})