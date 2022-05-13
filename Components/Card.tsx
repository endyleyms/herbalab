import { View, Text, Image } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View>
        <View>
            <Image 
            source={{uri: '	https://2.bp.blogspot.com/-HIQMomF_0JA/WCnYWVTxtGI…uMDJIQO4odx3ChUuwCLcB/s640/orchiplop_003_mini.jpg'}}
            />
        </View>
        <Text>Chloraea nudilabia</Text>
        <View>
            <Text>clase: Liliopsida</Text>
            <Text>Orden: Asparagales</Text>
            <Text>Familia: Orchidaceae</Text>
            <Text>Género: Chloraea</Text>
            <Text>Especie: Chloraea nudilabia</Text>

        </View>
        
    </View>
  )
}

export default Card