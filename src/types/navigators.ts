import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs"
import { CompositeScreenProps, NavigatorScreenParams, } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import ListScreens from "src/screens/ListScreens"

export enum Screens {
    Splash = 'Splash',
    Scan = 'Scan',
    Welcome = 'Welcome',
    // Task = 'Task',
    // Bulletin = 'Bulletin',
    Home = 'Home',
    Credentia = 'Credentia',
    Connetion = 'Connetion',
    DetailCredentialAgents = 'DetailCredentialAgents',
    DetailConnetionAgents = 'DetailConnetionAgents',
    Signin = "Signin",
    Input = "Input",
    Call = "Call",
    CallVideo = "CallVideo",
    CreateNewJob = "CreateNewJob",
    Chat = "Chat",
    ChatSeting = "ChatSeting",
    ListScreens = "ListScreens",
    Menu = "Menu",
    Notifications ="Notifications",
    NotificationSetting="NotificationSetting",
    ChatSingle="ChatSingle",
    SigninPhone="SiginPhone",
    SignupName ="SignupName",
    SignupPhone="SignupPhone",
    OTP="OTP",
    WordDetails="WordDetails"

}

export enum Stacks {
    AuthStack = 'Auth Stack',
    TabStack = 'Tab Stack',
    AgentStack = 'Agent Stack'
}

export type RootStackParams = {
    [Screens.Home]: undefined
    [Screens.Credentia]: undefined
    [Screens.Connetion]: undefined
    // [Screens.Bulletin]: undefined
    // [Screens.Task]: undefined
    [Screens.DetailConnetionAgents]: undefined
    [Screens.DetailCredentialAgents]: {
        CardName: string,
        isuerName: string,
        date: string,
        dataCard: any
    }
    // [Screens.Input]:undefined
}

// export type RootStackParams = {
//     // [Stacks.AuthStack]: NavigatorScreenParams<AuthStackParmas>
//     [Stacks.TabStack]: NavigatorScreenParams<TabStackParmas>
//     [Stacks.AgentStack]: NavigatorScreenParams<AgentStackParmas>

// }
// export type TabStackParmas = {
//     [Screens.Chat]: undefined
//     [Screens.Calendar]: undefined
//     [Screens.Menu]: undefined
//     [Screens.Bulletin]: undefined
//     [Screens.Task]: undefined

// }
// export type AgentStackParmas = {
//     [Screens.DetailConnetionAgents]: undefined
//     [Screens.DetailCredentialAgents]: undefined

// }

export type AuthStackParmas = {
    [Screens.Scan]: undefined
    [Screens.Welcome]: undefined
    [Screens.Signin]: undefined
    [Screens.Input]:undefined
    [Screens.CreateNewJob]:undefined
    [Screens.Call]:undefined
    [Screens.CallVideo]:undefined
    [Screens.Chat]:undefined
    [Screens.ChatSeting]:undefined
    [Screens.ListScreens]:undefined
    [Screens.Menu]:undefined
    [Screens.ChatSingle]:undefined
    [Screens.SigninPhone]:undefined
    [Screens.SignupName]:undefined
    [Screens.SignupPhone]:undefined
    [Screens.NotificationSetting]:undefined
    [Screens.Notifications]:undefined
    [Screens.OTP]:undefined
    [Screens.WordDetails]:undefined

}

export type RootStackScreenProps<T extends keyof RootStackParams> =
    NativeStackScreenProps<RootStackParams, T>;

// export type MainTabScreenProps<T extends keyof TabStackParmas> =
//     CompositeScreenProps<
//         MaterialTopTabScreenProps<TabStackParmas, T>,
//         RootStackScreenProps<keyof RootStackParams>
//     >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParams { }
    }
}