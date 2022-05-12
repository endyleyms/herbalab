import React from "react";
import { Pressable, SafeAreaView, TextInput, StyleSheet, View, Button, Text } from "react-native";
import Hello from '../Components/MyComponent';
import {useTailwind} from 'tailwind-rn';


export default function Singup() {
  const tailwind = useTailwind();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  
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
                onChangeText={onChangeName}
                value={name}
                placeholder="Your First Name" />
            </View>
          </View>
          <View>
            <Text><strong>Last Name</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeLastName}
                value={lastName}
                placeholder="Your Last Name" />
            </View>
          </View>
          <View>
            <Text><strong>Email</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Your email" />
            </View>
          </View>
          <View>
            <Text><strong>Password</strong></Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder="Your password" />
            </View>

          </View>
          <Pressable style={styles.buton}>
            <Text style={styles.text}>Singup</Text>
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