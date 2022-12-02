import { useIsFocused } from '@react-navigation/native';
import { WINDOW_HEIGHT, WINDOW_WIDTH, ColorPallet, Assets } from '../themes';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParmas, RootStackParams, Screens } from '../types/navigators';
import { AgentThunks, useAppDispatch } from '@store';

type ContactDetailsProps = NativeStackScreenProps<AuthStackParmas, Screens.Welcome>

export const Welcome: React.FC<ContactDetailsProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  // const LinkLogin = async () => {
  //   const response = await fetch("http://192.168.1.101:3000/agent/get-login-url")
  //   const url = await response.text();
  //   console.log("URL: ",url);
  //   dispatch(AgentThunks.initializeAgentConnetion(url))
  // }
  return (
    <ImageBackground
      style={style.imgBack}
      source={Assets.img.background}
      resizeMode="stretch">
      <Image
        style={style.imgfirstclass}
        source={Assets.img.backgroundTop}
        resizeMode="stretch"
      />
      {/* lớp thứ 1 */}
      <Image
        style={style.imgsecondclass}
        source={Assets.img.backgroundTop}
        resizeMode="stretch"
      />
      {/* lớp thứ 2 */}
      <Image
        style={style.imgthirdclass}
        source={Assets.img.backgroundTop}
        resizeMode="stretch"
      />
      <RNStatusBar
        backgroundColor={ColorPallet.basicColors.white}
        barStyle={isFocused ? 'dark-content' : 'light-content'}
      />
      <Image
        style={style.imglogo}
        source={Assets.img.logoChat}
        resizeMode="contain"
      />
      <Image
        style={style.imgmaskgroup}
        source={Assets.img.maskGroup}
        resizeMode="contain"
      />
      <SafeAreaView style={{ flex:1 }}>
        <View style={style.container}>
          <Text style={style.textfirst}>GLOBALCHAIN CO.,LTD</Text>
          <Text style={style.textsecond}>
            <Text>Chào mừng đến với </Text>
            <Text style={{ fontWeight: 'bold' }}>SCHAT</Text>
          </Text>
          <View style={style.containerbutton}>
            {/* Đăng nhập */}
            <TouchableOpacity
              style={style.buttonlogout}
              onPress={async () => {
                // LinkLogin();
                navigation.navigate(Screens.Signin);
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                {'Đăng nhập'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonlogout}
              onPress={async () => {
                // LinkLogin();
                navigation.navigate(Screens.ListScreens);
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  color: '#FFFFFF',
                }}>
                {'Scan'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: WINDOW_HEIGHT * 0.5,
    width: WINDOW_WIDTH,
    alignItems: 'center',
  },
  imgBack: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    position: 'absolute',
  },
  imgfirstclass: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.58,
    position: 'absolute',
    tintColor: '#36b0e3',
  },
  imgsecondclass: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.55,
    position: 'absolute',
    tintColor: '#5ec0e9',
  },
  imgthirdclass: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.525,
    position: 'absolute',
  },
  imglogo: {
    width: WINDOW_WIDTH * 0.233,
    height: WINDOW_HEIGHT * 0.048,
    marginTop: WINDOW_HEIGHT * 0.045,
    alignSelf: 'center',
  },
  imgmaskgroup: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.38,
    marginTop: WINDOW_HEIGHT * 0.016,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfirst: {
    marginTop: WINDOW_HEIGHT * 0.1,
    fontSize: WINDOW_HEIGHT * 0.046,
    color: '#FFFFFF',
  },
  textsecond: {
    fontFamily: 'System',
    fontSize: WINDOW_HEIGHT * 0.018,
    color: '#FFFFFF',
  },
  containerbutton: {
    height: WINDOW_HEIGHT * 0.5,
    width: WINDOW_WIDTH,
    alignItems: 'center',
  },
  textthird: {
    marginTop: WINDOW_HEIGHT * 0.085,
    marginBottom: 6,
    fontFamily: 'System',
    fontSize: 13,
    color: '#FFFFFF',
  },
  buttonlogin: {
    width: WINDOW_WIDTH * 0.912,
    height: WINDOW_HEIGHT * 0.057, // cần xem lại
    backgroundColor: '#BEF7FF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonlogout: {
    width: WINDOW_WIDTH * 0.912,
    height: WINDOW_HEIGHT * 0.057, // cần xem lại
    marginTop: WINDOW_HEIGHT * 0.0098,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#C0F7FF',
    backgroundColor: '#27aae1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
