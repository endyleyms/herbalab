import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { getAuth, updateProfile } from "firebase/auth";
import { ref, uploadBytes  } from "firebase/storage";
import firebaseModule from '../database/firebase'

const Profile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(user)
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
        const update ={
          photoURL: image
        }
        const auth = getAuth(firebaseModule.app);
        await updateProfile(auth.currentUser,(update))
      }      
    }
    const photoURL = user.photoURL;
    console.log(photoURL)
    console.log('image', image)
    
    useEffect(()=>{
      image && uploadFile();
    },[image])

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Pressable style={styles.buton}>
        <Text style={styles.text} onPress={uploadFile} >Upload image</Text>
      </Pressable>
      <Text>Name: {user.displayName}</Text>
      <Text>Email: {user.email}</Text>
      <Text></Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: 40,
    height: '100%',
    alignItems: 'center'
  },
  buton:{
    backgroundColor: '#F2DCAE',
    width: '30%',
    height: '5%',
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  },
})