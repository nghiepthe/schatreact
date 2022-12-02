import {Assets, ColorPallet} from '../themes';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import {ActivityIndicator, Text} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {createNewAgent} from '@store/aries/config';
import {startRecordListeners} from '@store/aries/recordListener';
import {
  AgentThunks,
  ConnectionThunks,
  CredentialsThunks,
  onLoadingComplete,
  store,
  useAppDispatch,
  useAppSelector,
} from '@store';

const Splash: React.FC = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(state => state.agent.isInitialized);

  useEffect(() => {
    changeNavigationBarColor(ColorPallet.brandColors.primary, true, true);
    return () =>
      changeNavigationBarColor(ColorPallet.basicColors.black, true, true);
  }, []);

  useEffect(() => {
    console.log("Khoi tao agent")
    const agent = createNewAgent();
    startRecordListeners(agent, store);
    dispatch(AgentThunks.initializeAgent(agent));
  }, []);

  useEffect(() => {
    if (isInitialized) {
      dispatch(ConnectionThunks.getAllConnections())
      dispatch(CredentialsThunks.getAllCredentials())
      dispatch(onLoadingComplete());
    }
  }, [isInitialized]);

  return (
    <Flex
      fill
      items="center"
      justify="center"
      bg={ColorPallet.brandColors.primary}>
      <StatusBar backgroundColor={ColorPallet.brandColors.primary} />
      <Text style={style.logoText}>SChat</Text>
      <ActivityIndicator color={ColorPallet.basicColors.white} />
    </Flex>
  );
};

const style = StyleSheet.create({
  logoText: {
    fontSize: 100,
    color: ColorPallet.basicColors.white,
    fontFamily: Assets.fonts.arciform,
  },
});

export default Splash;
