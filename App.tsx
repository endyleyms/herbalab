import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Login from './Pages/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


