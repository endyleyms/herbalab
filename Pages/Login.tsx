import { getAuth, signInWithEmailAndPassword, } from "firebase/auth"
import firebaseModule from '../database/firebase'
import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable } from "react-native";
import Hello from '../Components/MyComponent';


export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPasswor] = React.useState('');

  const handleSigIn  =  () =>{
    const auth = getAuth(firebaseModule.app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email)
        navigation.navigate('Explore')
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
            <Text style={styles.text} onPress={handleSigIn} >Login</Text>
          </Pressable>
        <Pressable style={styles.butonF}>
            <Text style={styles.textf}>Sing In with Facebook</Text>
        </Pressable>
        <Pressable style={styles.butonG}>
            <Text style={styles.textG}>Sing In with Google</Text>
        </Pressable>
        <Text onPress={() => navigation.navigate('Singup')}>Dont have an account? Sing up </Text>
    </SafeAreaView>
    </>
  );
};
const styles= StyleSheet.create({
  container1:{
    position: 'relative',
    top: 200,
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
    height: '10%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  butonF:{
    backgroundColor: '#E7EAF4',
    width: '100%',
    height: '10%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  butonG:{
    backgroundColor: '#FAE9EA',
    width: '100%',
    height: '10%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
  textf:{
    fontWeight: 'bold',
    color: '#4765A9',
  },
  textG:{
    fontWeight: 'bold',
    color: '#f97316',
  },
})
