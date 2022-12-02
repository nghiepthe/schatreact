import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Main} from './src';

const Base = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Main />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Base);
