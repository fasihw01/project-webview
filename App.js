import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import LoginScreen from './components/screens/LoginScreen';
import Register from './components/screens/Register';
import ProductInfo from './components/screens/ProductInfo';
import MyWebComponent from './components/helpers/WebView';
import AuthStack from './navigation/AuthStack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
     <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="MyWebComponent" component={MyWebComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
