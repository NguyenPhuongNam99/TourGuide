// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroApp from '../features/intro-app/IntroApp';
import Home from '../features/home/Home';
import FirstScreen from '../features/first-screen/FirstScreen';
import Login from '../features/login/Login';
import SignUp from '../features/signup/SignUp';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="IntroApp" component={IntroApp} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
