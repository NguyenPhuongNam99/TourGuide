import React from 'react';
import {SafeAreaView} from 'react-native';
import IntroApp from './src/features/intro-app/IntroApp';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
      <StackNavigation />
  );
};

export default App;
