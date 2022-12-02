import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppSelector } from '@store';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../types/navigators';
import DetailConnetionAgents from '../screens/DetailConnetionAgents';
import DetailCredentialAgents from '../screens/DetailCredentialAgents';
const AgentStack: React.FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.DetailConnetionAgents}
                component={DetailConnetionAgents} />
            <Stack.Screen name={Screens.DetailCredentialAgents}
                component={DetailCredentialAgents} />
        </Stack.Navigator>
    );
};

export default AgentStack;
