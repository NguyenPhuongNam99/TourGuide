// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroApp from '../features/intro-app/IntroApp';
import Home from '../features/home/Home';
import FirstScreen from '../features/first-screen/FirstScreen';
import Login from '../features/login/Login';
import SignUp from '../features/signup/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppIonicons from '../components/icon/AppIonicons';
import AppMaterIcon from '../components/icon/AppMaterialIcons';
import TourGuide from '../features/tourguide/TourGuide';
import TourGuideDetail from '../features/tour-guide-detail/TourGuideDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackHome = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const StackTour = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IntroApp" component={IntroApp} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="StackHomeNavigation"
        component={StackHomeNavigation}
      />
    </Stack.Navigator>
  );
}


export function RootStackNavigation() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="StackNavigation" component={StackNavigation} />
      <RootStack.Screen
        name="StackHomeNavigation"
        component={StackHomeNavigation}
      />
    </RootStack.Navigator>
  );
}

export function TourGuideNavigation() {
  return (
    <StackTour.Navigator screenOptions={{headerShown: false}}>
      <StackTour.Screen name='TourGuide' component={TourGuide} />
      <StackTour.Screen name='TourGuideDetail' component={TourGuideDetail} />
    </StackTour.Navigator>
  )
}

export function StackHomeNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: tabInfo => (
            <AppIonicons
              name="ios-home"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
          title:'Trang chủ'
        }}
      />
      <Tab.Screen
        name="TourGuideNavigation"
        component={TourGuideNavigation}
        options={{
          tabBarIcon: tabInfo => (
            <AppMaterIcon
              name="tour"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
          title:'Tour của bạn'

        }}
      />
    </Tab.Navigator>
  );
}