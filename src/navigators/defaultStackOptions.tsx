import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Theme} from '../themes';
import React from 'react';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function createStatusBarGradient({headerColors, statusColors}) {
  return function () {
    return (
      <>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0}}
          colors={statusColors}
          style={{height: StatusBar.currentHeight}}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={headerColors}
          style={{flex: 1}}
        />
      </>
    );
  };
}

export function createDefaultStackOptions({
  NavigationTheme,
  ColorPallet,
}: Theme): NativeStackNavigationOptions {
  return {
    headerBackground: createStatusBarGradient(NavigationTheme.linearGradient),
    headerTitleStyle: {color: ColorPallet.basicColors.white},
    headerTintColor: ColorPallet.basicColors.white,
  };
}
