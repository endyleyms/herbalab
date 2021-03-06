import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore';
import firebaseModule from '../database/firebase'
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

const Information = ({route}) => {
  const navigation = useNavigation();
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
      <Text style={styles.textFamilia}>{familia}</Text>
      <ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>
        <DataTable style={styles.table}>
          <DataTable.Header>
            <DataTable.Title>Familia</DataTable.Title>
            <DataTable.Title>Género</DataTable.Title>
            <DataTable.Title>Especie</DataTable.Title>
          </DataTable.Header>      
          {grupos.map((group)=>
          <DataTable.Row onPress={() => navigation.navigate('Detail', {
            group
          })}>
            <DataTable.Cell>{group.familia}</DataTable.Cell>
            <DataTable.Cell>{group.genero}</DataTable.Cell>
            <DataTable.Cell>{group.especie}</DataTable.Cell>
          </DataTable.Row>
          )}
        </DataTable>
        
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('Herbario',{
          item
        })}
      />
      
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: 20,
    top: 20,
    height: '100%',
    width: '88%',
  },
  table:{
    backgroundColor: 'white',
    width: '100%',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 80,
    backgroundColor: '#95B37D'
  },
  textFamilia:{
    color: '#1E5959',
    fontSize: 20,
    alignSelf: 'center',
    padding: 20
  }
})