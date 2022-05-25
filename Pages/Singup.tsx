import React from "react";
import { Pressable, SafeAreaView, TextInput, StyleSheet, View, Text, Image } from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import firebaseModule from '../database/firebase'
import Logo from '../assets/HerbalApp.png'

export default function Singup({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPasswor] = React.useState('');
  const [name, setName] = React.useState('');

  const handleCreateUser  = async () =>{
    const auth = getAuth(firebaseModule.app);
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser,{
      displayName: name
    })
    navigation.navigate('Home', {
      screen: 'Profile',  
    })
  }
    
  
  return (
    <><View style={styles.containerHello}>
      <Image 
				source={Logo}
				style={{ width: '60%', height: '40%'}} />
    </View>
    <SafeAreaView style={styles.container1}>
          <View>
            <Text>Name</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) =>setName(text)}
                placeholder="Your Name" />
            </View>
          </View>
          <View>
            <Text>Email</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) =>setEmail(text)}
                placeholder="Your email" />
            </View>
          </View>
          <View>
            <Text>Password</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) =>setPasswor(text)}
                secureTextEntry={true}
                placeholder="Your password" />
            </View>

          </View>
          <Pressable style={styles.buton}>
            <Text style={styles.text} onPress={ handleCreateUser} >Singup</Text>
          </Pressable>
    </SafeAreaView></>
  );
};

const styles= StyleSheet.create({
  container1:{
    position: 'relative',
    top: 50,
    alignItems: 'stretch',
    width: '80%',
    left: 35
  },
  containerHello:{
    position: 'relative',
    top: 80,
    alignItems: 'center',
  },
  container:{
    backgroundColor: 'white',
    width: '100%',
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
    width: '100%',
    height: '13%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
})