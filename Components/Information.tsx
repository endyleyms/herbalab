import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore';
import firebaseModule from '../database/firebase'
import Card from './Card';
import Search from './Search';

const Information = ({route}) => {

  const {familia, item} = route.params;

  const [grupos, setgrupos] = useState([{}])
  async function getFamilia() {
    const familiacolref = collection(firebaseModule.db, `/familia/${item.id}/grupos/`);
      const grupoDoc = await getDocs(familiacolref);
      const grupoList = grupoDoc.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setgrupos(grupoList)
  }
  console.log(grupos)

  useEffect(()=> {
    getFamilia()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Grupo: {familia}</Text>
      <Text>Mapa</Text>
      <Search/>
      <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>
        {grupos.map((item)=> <Card familia={item.familia} genero={item.genero} especie={item.especie} item={item}/>)}
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