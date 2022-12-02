import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParmas, Screens, Stacks } from '../types/navigators';
import Spash from '../screens/Splash';
import Scan from '../screens/Scan';
import Welcome from '../screens/Welcome';
import { createDefaultStackOptions } from './defaultStackOptions';
import { useAppSelector } from '@store';
import Splash from '../screens/Splash';
import Connetion from '../screens/Connetion';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabStack from './TabStack';
import { IconButton } from 'react-native-paper';
import HeaderMenu from '../components/menus/HeaderMenu';
import { Agent } from '@aries-framework/core';
import AgentStack from './AgentStack';
import DetailConnetionAgents from '../screens/DetailConnetionAgents';
import DetailCredentialAgents from '../screens/DetailCredentialAgents';
import Signin from '../screens/Signin';
import Input from '../screens/Input';
import Call from '../screens/Call';
import CallVideo from '../screens/CallVideo';
import CreateNewJob from '../screens/CreateNewJob';
import Chat from '../screens/Chat';
import ChatSetting from '../screens/ChatSeting';
import ListScreens from '../screens/ListScreens';
import Menu from '../screens/Menu';
import Notifications from '../screens/Notifications';
import NotificationSetting from '../screens/NotificationSetting';
import ChatSingle from '../screens/ChatSingle';
import SigninPhone from '../screens/SigninPhone';
import SignupName from '../screens/SignupName';
import SignupPhone from '../screens/SignupPhone';
import OTP from '../screens/OTP';
import WordDetails from '../screens/WordDetails';

const RootStack: React.FC = () => {
  const theme = useAppSelector(state => state.themes);
  const defaultStackOptions = createDefaultStackOptions(theme);

  const authStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName={Screens.Welcome}
        screenOptions={{ headerShown: false, headerBackground: undefined }}>
        <Stack.Screen name={Screens.Welcome} component={Welcome} />
        <Stack.Screen name={Screens.Scan} component={Scan} />
        <Stack.Screen name={Screens.Connetion} component={Connetion} />
      </Stack.Navigator>
    );
  };

  const mainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
        <Stack.Screen
          name={Stacks.TabStack}
          component={TabStack}
          options={{
            headerLeft: props => (
              <IconButton
                icon="magnify"
                color="white"
                onPress={() => { }}
                {...props}
              />
            ),
            headerRight: props => <HeaderMenu />,
            headerTitle: 'Tìm kiếm',
          }}
        />
        <Stack.Screen name={Screens.Connetion} component={Connetion} />
        <Stack.Screen name={Screens.DetailConnetionAgents} component={DetailConnetionAgents} />
        <Stack.Screen name={Screens.DetailCredentialAgents} component={DetailCredentialAgents} />
        <Stack.Screen name={Screens.Signin} component={Signin} />
        <Stack.Screen name={Screens.Input} component={Input} />
        <Stack.Screen name={Screens.CreateNewJob} component={CreateNewJob} />
        <Stack.Screen name={Screens.Call} component={Call} />
        <Stack.Screen name={Screens.CallVideo} component={CallVideo} />
        <Stack.Screen name={Screens.Chat} component={Chat} />
        <Stack.Screen name={Screens.ChatSeting} component={ChatSetting} />
        <Stack.Screen name={Screens.ListScreens} component={ListScreens} />
        <Stack.Screen name={Screens.Menu} component={Menu} />
        <Stack.Screen name={Screens.Notifications} component={Notifications} />
        <Stack.Screen name={Screens.NotificationSetting} component={NotificationSetting} />
        <Stack.Screen name={Screens.ChatSingle} component={ChatSingle} />
        <Stack.Screen name={Screens.SigninPhone} component={SigninPhone} />
        <Stack.Screen name={Screens.SignupName} component={SignupName} />
        <Stack.Screen name={Screens.SignupPhone} component={SignupPhone} />
        <Stack.Screen name={Screens.OTP} component={OTP} />
        <Stack.Screen name={Screens.WordDetails} component={WordDetails} />

      </Stack.Navigator>
    );
  };

  const { isLoading, isSignout } = useAppSelector(state => state.authenticate);

  if (isLoading) return <Splash />;

  return !isSignout ? authStack() : mainStack();
};

export default RootStack;
