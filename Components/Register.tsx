import { Pressable, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = () => {
  const [familia, setfamilia] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [espcie, setEspecie] = React.useState('');
  const [unibation, setUbication] = React.useState('');
  const [description, setDescription] = React.useState('');


  const handleCreateRegister  = async () =>{
    
  }

  return (
    <View style={styles.container1}>
      <Text>Ingresa a continuación tu nuevo registro</Text>
      <Image source={{ uri: "https://pin.it/3E3f0QO"  }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Pressable style={styles.butonI}>
        <Text style={styles.text} >Upload image</Text>
      </Pressable>
        <View>
          <Text>Familia</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={familia}
              onChangeText={(text) =>setfamilia(text)}
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
              value={espcie}
              onChangeText={(text) =>setEspecie(text)}
              secureTextEntry={true}
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
              secureTextEntry={true}
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
              secureTextEntry={true}
              placeholder="Descripción" />
          </View>
        </View>
        <Pressable style={styles.buton}>
          <Text style={styles.text} onPress={handleCreateRegister} >Register</Text>
        </Pressable>
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
    height: '5%',
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
    height: '5%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  }
})