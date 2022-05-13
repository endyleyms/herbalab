import React from "react";
import { Pressable, SafeAreaView, TextInput, StyleSheet, View, Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebaseModule from '../database/firebase'
import Hello from '../Components/MyComponent';

export default function Singup() {
  const [fisrtName, setFisrtName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPasswor] = React.useState('');

  const handleCreateUser  =  () =>{
    const auth = getAuth(firebaseModule.app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      }
    
  
  return (
    <><View style={styles.containerHello}>
      <Hello />
    </View>
    <SafeAreaView style={styles.container1}>
        <form>
          <View>
            <Text><strong>First Name</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={fisrtName}
                onChangeText={(text) =>setFisrtName(text)}
                placeholder="Your First Name" />
            </View>
          </View>
          <View>
            <Text><strong>Last Name</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value= {lastName}
                onChangeText={(text) =>setLastName(text)}
                placeholder="Your Last Name" />
            </View>
          </View>
          <View>
            <Text><strong>Email</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) =>setEmail(text)}
                placeholder="Your email" />
            </View>
          </View>
          <View>
            <Text><strong>Password</strong></Text>
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
        </form>
      </SafeAreaView></>
  );
};

const styles= StyleSheet.create({
  container1:{
    position: 'relative',
    top: 150,
    alignItems: 'stretch',
    width: '80%',
    left: 35
  },
  containerHello:{
    position: 'relative',
    top: 80,
    alignItems: 'center',
    width: '80%',
    left: 35
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
    height: '15%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
})