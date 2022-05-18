import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Profile = () => {
  const route = useRoute();
  return (
    <View>
      <Text>Email: {route.params.email}</Text>
      <Text>card foto perfil</Text>
      <Text>form con información básica del usuario</Text>
      <Text></Text>
    </View>
  )
}

export default Profile