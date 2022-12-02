import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageVideoTheme } from '../themes/ChatSeting/ImageVideoTheme';
import TabNavigation from '../navigators/TabNavigation';
import { ChatSetting } from '../themes/ChatSeting/ChatSeting';
import { Button } from 'react-native-paper';


import Files from '../components/ChatSetting/Files'
import ImageVideo from '../components/ChatSetting/ImageVideo'
import Links from '../components/ChatSetting/Links'

import Details from '../components/WordDetails/Details'
import Comments from '../components/WordDetails/Comments'
import SwitchMain from '@components/WordDetails/SwitchMain';

const Chat: React.FC = () => {
    const [stateButton, setStateButton] = useState("images")
    const render = () => {
        if (stateButton == "images") {
            return (<ImageVideo></ImageVideo>)
        }
        if (stateButton == "file") {
            return (<Files></Files>)
        }
        if (stateButton == "link") {
            return (<Links></Links>)
        }
        else {
            return (<></>)
        }
    }
    return (
        <ScrollView>
            {/* <StatusBar />
                <ImageBackground
                    source={require('../assets/images/bg-image.jpg')}
                    style={ChatSetting.backgroundImage}
                    resizeMode='cover'
                >
                    <TouchableOpacity
                        // onPress={() => navigation.goBack()}
                        style={ChatSetting.imgBackgroundContainer}
                    >
                        <AntDesign name='left' size={24} color='#FFFFFF' />
                        <Text style={ChatSetting.textProfile}>Hồ sơ</Text>
                    </TouchableOpacity>
                </ImageBackground> */}

            <SafeAreaView style={ChatSetting.container}>
                <View style={ChatSetting.headerContainer}>
                    <Image
                        source={require('../assets/images/avt.png')}
                        style={ChatSetting.avatar}
                    />
                    <FontAwesome
                        name='camera'
                        size={18}
                        color='black'
                        style={ChatSetting.imgCamera}
                    />
                    <View style={ChatSetting.textContainer}>
                        <Text style={ChatSetting.textInfo}>
                            Gsoft Group
                        </Text>
                        <AntDesign name='edit' size={22} color='black' />
                    </View>
                </View>

                <View style={{ height: 300, alignItems: "center" }}>
                    {/* <TabNavigation /> */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Button onPress={() => { setStateButton("images") }}> Images</Button>
                        <Button onPress={() => { setStateButton("file") }}> File</Button>
                        <Button onPress={() => { setStateButton("link") }}> Link</Button>
                    </View>
                    <View>
                        {
                            render()
                        }
                    </View>
                </View>

                <View style={ChatSetting.empty}></View>

                <View style={ChatSetting.otherContainer}>
                    <Text style={ChatSetting.setupOther}>
                        Cài đặt khác
                    </Text>

                    <View style={ChatSetting.hideContainer}>
                        <Text style={ChatSetting.hideText}>
                            Ẩn trò chuyện
                        </Text>
                        <SwitchMain />
                    </View>
                    <View style={ChatSetting.showContainer}>
                        <Text style={ChatSetting.showText}>
                            Hiện thông báo
                        </Text>
                        <SwitchMain />
                    </View>
                    <Text style={ChatSetting.changeImg}>
                        Thay đổi ảnh nền
                    </Text>
                    <Text style={ChatSetting.outGroup}>Rời nhóm</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Chat;

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 4,
        // padding: 5,
        backgroundColor: '#E1E1E1',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'roboto-regular',
        fontSize: 13,
    },
})