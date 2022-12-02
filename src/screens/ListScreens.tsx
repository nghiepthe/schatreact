import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthStackParmas, Screens } from '../types/navigators';

type ContactDetailsProps = NativeStackScreenProps<AuthStackParmas, Screens.ListScreens>

const ListScreens: React.FC<ContactDetailsProps> = ({ navigation }) => {
    return (
        <View>
            <Text>List Screens</Text>
            <Button onPress={() => {
                navigation.navigate(Screens.Call)
            }}>
                Call
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.CallVideo)
            }}>
                Call Video
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.Chat)
            }}>
                Chat
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.ChatSeting)
            }}>
                ChatSeting
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.CreateNewJob)
            }}>
                CreateNewJob
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.Input)
            }}>
                Input QR
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.Menu)
            }}>
                Menu            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.Notifications)
            }}>
                Notifications            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.NotificationSetting)
            }}>
                NotificationSetting            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.ChatSingle)
            }}>
                ChatSingle            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.SigninPhone)
            }}>
                SiginPhone            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.SignupName)
            }}>
                SignupName            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.SignupPhone)
            }}>
                SignupPhone            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.OTP)
            }}>
                OTP            
            </Button>
            <Button onPress={() => {
                navigation.navigate(Screens.WordDetails)
            }}>
                WordDetails            
            </Button>
        </View>
    );
};

export default ListScreens;
