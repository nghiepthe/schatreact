import {store} from '@store';
import React from 'react';
import {Provider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import RootStack from './navigators/RootStack';

export const Main = () => {
  return (
    <ReduxProvider store={store}>
      <Provider>
        <RootStack />
      </Provider>
    </ReduxProvider>
  );
};
