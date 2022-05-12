import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Button, Text } from "react-native";
import Hello from '../Components/MyComponent';
import {useTailwind} from 'tailwind-rn';


export default function Singup() {
  const tailwind = useTailwind();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  
  return (
    <SafeAreaView>
      <Hello />
      <form >
      <View>
          <Text>First Name</Text>
          <TextInput
          style={tailwind('w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4')}
          onChangeText={onChangeName}
          value={name}
          placeholder="Your First Name"
        />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
          style={tailwind('w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4')}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
        />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
          style={tailwind('w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4')}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Your email"
        />
        </View>
        <View>
        <Text>Password</Text>
         <TextInput
         style={tailwind('w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4')}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Your password"
          /> 
        </View>
        <Button 
        title="Singup"
        // onPress={}
        />  
      </form>
    </SafeAreaView>
  );
};