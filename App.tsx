import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Login from './Pages/Login';
import Singup from './Pages/Singup';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


