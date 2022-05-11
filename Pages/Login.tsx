import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Button, Text } from "react-native";
import Hello from '../Components/MyComponent';
import {useTailwind} from 'tailwind-rn';


export default function Login() {
  const tailwind = useTailwind();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  
  return (
    <SafeAreaView>
      <Hello />
      <form >
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
        title="Login"
        // onPress={}
        />  
      </form>
      <Text>Forgot the password?</Text>
      <View>
        <Text>Do'nt have an account? Sing up</Text>
      </View>
          
      
    </SafeAreaView>
  );
};

