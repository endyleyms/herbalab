import { Pressable, Image, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker'
import { collection, addDoc } from "firebase/firestore";
import firebaseModule from '../database/firebase'
import React, { useState } from 'react'

const Register = () => {

  const [family, setfamily] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [especie, setEspecie] = React.useState('');
  const [unibation, setUbication] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [image, setImage] = useState(null);

  const uploadFile= async ()=>{
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      
    }
    } catch (error) {
      console.log(error)
    }
          
  }


  const handleCreateRegister  = async () =>{
    const docRef = await addDoc(collection(firebaseModule.db,`/familia/WW6rF9dCAN7riaC6frYU/grupos/`), {
      familia: family,
      genero: genero,
      especie: especie,
      description: description,
      image: image,
    });
    console.log("Document written with ID: ", docRef.id);
    Alert.alert("Your register has been succsesful");
  }

  return (
    <View style={styles.container1}>
      <ScrollView horizontal={false}>
        {!image && (
          <MaterialCommunityIcons name="camera"  size={100} style={{ color:'gray' }} />
        )}
        {image && <Image source={{ uri: image}} style={{ width: 150, height: 150, borderRadius: 100, left:30, }} />}
        <Pressable style={styles.butonI}>
          <Text style={styles.text} onPress={uploadFile} >Upload image</Text>
        </Pressable>
        <View>
          <Text>Familia</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={family}
              onChangeText={(text) =>setfamily(text)}
              placeholder="Familia" />
          </View>
        </View>
        <View>
          <Text>Género</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={genero}
              onChangeText={(text) =>setGenero(text)}
              placeholder="Género" />
          </View>
        </View>
        <View>
          <Text>Especie</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={especie}
              onChangeText={(text) =>setEspecie(text)}
              placeholder="Especie" />
          </View>
        </View>
        <View>
          <Text>Ubicación</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={unibation}
              onChangeText={(text) =>setUbication(text)}
              placeholder="Ubicación" />
          </View>
        </View>
        <View>
          <Text>Descripción</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) =>setDescription(text)}
              placeholder="Descripción" />
          </View>
        </View>
        <Pressable style={styles.buton}>
          <Text style={styles.text} onPress={handleCreateRegister} >Register</Text>
        </Pressable>
      </ScrollView>
      
    </View>
  )
}

export default Register

const styles= StyleSheet.create({
  container1:{
    position: 'relative',
    top: 20,
    alignItems: 'stretch',
    width: '100%',
    left: 35
  },  
  container:{
    backgroundColor: 'white',
    width: '80%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input:{
    height: 50
  },
  buton:{
    backgroundColor: '#F2DCAE',
    width: '80%',
    height: '7%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
  butonI:{
    backgroundColor: '#F2DCAE',
    width: '50%',
    height: '7%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  }
})