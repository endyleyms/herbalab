import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getAuth } from "firebase/auth";

const Profile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log(user)
    }

   

  return (
    <View>
      <Text>Name: {user.displayName}</Text>
      <Text>Email: {user.email}</Text>
      <Text>card foto perfil</Text>
      <Text>form con información básica del usuario</Text>
      <Text></Text>
    </View>
  )
}

export default Profile