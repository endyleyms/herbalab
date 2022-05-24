import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { ref, uploadBytes  } from "firebase/storage";
import firebaseModule from '../database/firebase';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Profile = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      const phoneNumber= user.phoneNumber;
      console.log('user', user)
    }
    const [image, setImage] = useState(null);

    const uploadFile= async ()=>{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
        const refImage = ref(firebaseModule.storage, 'images');
        const img= await fetch(result.uri);
        const bytes = await img.blob();
        const imageupload =await uploadBytes(refImage, bytes);
      }      
    }
    const photoURL = user.photoURL;
    console.log('photoURL',  photoURL)

    const updatePhoto = ()=>{
      const auth = getAuth(firebaseModule.app);
        updateProfile(auth.currentUser,{
          photoURL: image,
        })
    }

    const updateProfileUser = ()=>{
      const auth = getAuth(firebaseModule.app);
      updateProfile(auth.currentUser,{
        displayName: name,
      })
      updateEmail(auth.currentUser, {
        email: email,
      })
    }

    const UpdateEmail = ()=>{
      const auth = getAuth(firebaseModule.app);
      updateEmail(auth.currentUser, {
        email: email,
      })
    }
    const UpdatePassword = ()=>{
      const auth = getAuth(firebaseModule.app);
      updatePassword(auth.currentUser, {
        password: password,
      })
    }
    
    useEffect(()=>{
      setImage(image)
    },[image])

  return (
    <View style={styles.container1}>
      <ScrollView horizontal={false}>
        <View style={styles.container2}>
        {!image && (
          <MaterialCommunityIcons name="camera"  size={100} style={{ color:'gray' }} />
        )}
        {image && <Image source={{ uri: photoURL }} style={{ width: 150, height: 150, borderRadius: 100, left:30, }} />}          
          <Pressable style={styles.buton}>
            <Text style={styles.text} onPress={uploadFile} >Upload</Text>
          </Pressable>
          <Pressable style={styles.buton}>
            <Text style={styles.text} onPress={updatePhoto} >Update</Text>
          </Pressable>
          <Text>Name: {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
        </View>
          <Text>Name</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) =>setName(text)}
              placeholder="Your Name" />
          </View>
          <Pressable style={styles.butonP}>
            <Text style={styles.text} onPress={updateProfileUser} >Update Name</Text>
          </Pressable>
          <Text>Email</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) =>setEmail(text)}
              placeholder="Your Email" />
          </View>
          <Pressable style={styles.butonP}>
            <Text style={styles.text} onPress={UpdateEmail} >Update Email</Text>
          </Pressable>
          <Text>Password</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) =>setPassword(text)}
              placeholder="Your Password" />
          </View>
        <Pressable style={styles.butonP}>
          <Text style={styles.text} onPress={UpdatePassword} >Update Password</Text>
        </Pressable>
      </ScrollView>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container1:{
    position: 'relative',
    top: 20,
    alignItems: 'stretch',
    left: 35,
    padding: 3
  },
  container2:{
    width: '100%',
    left: 60
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
  buton:{
    backgroundColor: '#F2DCAE',
    width: '20%',
    height: '8%',
    padding: 5,
    marginVertical: 5,
    left:50,
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
  input:{
    height: 50
  },
  butonP:{
    backgroundColor: '#F2DCAE',
    width: '50%',
    height: '5%',
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
})