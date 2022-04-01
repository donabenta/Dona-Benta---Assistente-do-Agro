import React from 'react';
import {StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar backgroundColor="#ffff" barStyle="light-content"/>
    </NavigationContainer>
  );
}