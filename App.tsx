import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from "react-native";
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Explore from './Pages/Explore';
import Herbarium from './Pages/Herbarium';
import NewRegister from './Pages/NewRegister';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen 
          name="Singup" 
          component={Singup}
          options={{
            title: 'Singup',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen 
          name="Explore" 
          component={Explore}
          options={{
            title: 'Explore',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen 
          name="Herbarium" 
          component={Herbarium}
          options={{
            title: 'Herbarium',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen 
          name="NewRegister" 
          component={NewRegister}
          options={{
            title: 'NewRegister',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
      
  );
}

const styles= StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E1E8D5'
  }
})

