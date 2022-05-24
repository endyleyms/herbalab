import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Explore from './Pages/Explore';
import Herbario from './Pages/Herbario';
import Profile from './Pages/Profile';
import Information from './Components/Information';
import Register from './Components/Register';
import Detail from './Components/Detail';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Explore') {
          iconName = focused
            ? 'ios-flower'
            : 'ios-flower';
        } else if (route.name === 'Herbario') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
        } else{
          iconName = focused ? 'ios-person' : 'ios-person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#F2DCAE',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen 
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
      <Tab.Screen 
      name="Herbario" 
      component={Herbario}
      options={{
        title: 'Herbario',
        headerStyle: {
          backgroundColor: '#BCD4BF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Tab.Screen
      name="Profile" 
      component={Profile}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#BCD4BF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Tab.Navigator>
  );
}


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
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
          />  
          <Stack.Screen 
          name="Information" 
          component={Information}
          options={{
            title: 'Information',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} /> 
          <Stack.Screen 
          name="Register" 
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#BCD4BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} /> 
          <Stack.Screen 
          name="Detail" 
          component={Detail}
          options={{
            title: 'Detail',
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

