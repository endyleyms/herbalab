import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { getAuth, updateProfile } from "firebase/auth";
import { ref, uploadBytes  } from "firebase/storage";
import firebaseModule from '../database/firebase'

const Profile = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
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
    const updateProfileUser = ()=>{
      const auth = getAuth(firebaseModule.app);
      updateProfile(auth.currentUser,{
        displayName: name,
        email: email,
        photoURL: image,
        phoneNumber: phone,
      })

    }
    
    useEffect(()=>{
      setImage(image)
    },[image])

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
       <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Pressable style={styles.buton}>
        <Text style={styles.text} onPress={uploadFile} >Upload image</Text>
      </Pressable>
      <Text>Name: {user.displayName}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phoneNumber}</Text> 
      </View>
      
      <View>
          <Text>Name</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) =>setName(text)}
              placeholder="your Name" />
          </View>
        </View>
        <View>
          <Text>Email</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) =>setEmail(text)}
              placeholder="Your Email" />
          </View>
        </View>
        <View>
          <Text>Phone number</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={(text) =>setPhone(text)}
              placeholder="Your Phone" />
          </View>
        </View>
        <Pressable style={styles.butonP}>
          <Text style={styles.text} onPress={updateProfileUser} >Update</Text>
        </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container1:{
    position: 'relative',
    top: 20,
    alignItems: 'stretch',
    width: '100%',
    left: 35
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
    width: '30%',
    height: '10%',
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
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
    width: '80%',
    height: '5%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
})