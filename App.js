import React from 'react';
import {SafeAreaView} from 'react-native';
import IntroApp from './src/features/intro-app/IntroApp';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {store} from './src/app/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
