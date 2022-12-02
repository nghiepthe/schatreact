import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppSelector } from '@store';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { Screens } from '../types/navigators';
import Credentia from '../screens/Credentia';
import Connetion from '../screens/Connetion';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Welcome from '../screens/Welcome';

const TabStack: React.FC = () => {
  const theme = useAppSelector(state => state.themes);
  const Stack = createMaterialTopTabNavigator();

  return (
    <Stack.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: theme.ColorPallet.brandColors.tint,
        tabBarInactiveTintColor: theme.ColorPallet.grayscale.mediumGrey,
        tabBarPressColor: theme.ColorPallet.grayscale.lightGrey,
        tabBarItemStyle: { height: 52 },
        tabBarLabelStyle: { fontWeight: '600', textTransform: 'capitalize' },
        tabBarContentContainerStyle: {
          backgroundColor: theme.ColorPallet.basicColors.white,
        },
      }}>
      {/* <Stack.Screen
        name={Screens.Task}
        component={Task}
        options={{
          title: Screens.Task,
          tabBarLabel: Screens.Task,
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={'check-circle'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      /> */}

      {/* <Stack.Screen
        name={Screens.Bulletin}
        component={Bulletin}
        options={{
          title: Screens.Bulletin,
          tabBarLabel: Screens.Bulletin,
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={'newspaper-variant'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      /> */}

      <Stack.Screen
        name={Screens.Home}
        component={Home}
        options={{
          title: Screens.Home,
          tabBarLabel: Screens.Home,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'message'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Stack.Screen
        name={Screens.Credentia}
        component={Credentia}
        options={{
          title: Screens.Credentia,
          tabBarLabel: Screens.Credentia,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'calendar'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Stack.Screen
        name={Screens.Connetion}
        component={Connetion}
        options={{
          title: Screens.Connetion,
          tabBarLabel: Screens.Connetion,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'cog'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Stack.Screen
        name={Screens.Scan}
        component={Scan}
        options={{
          title: Screens.Scan,
          tabBarLabel: Screens.Scan,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'cog'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Welcome}
        component={Welcome}
        options={{
          title: Screens.Welcome,
          tabBarLabel: Screens.Welcome,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'cog'.concat(focused ? '' : '-outline')}
              color={color}
              size={24}
            />
          ),
        }}
      />
      {/* <Stack.Screen
        name={Screens.User}
        component={User}
      /> */}
    </Stack.Navigator>
  );
};

export default TabStack;
