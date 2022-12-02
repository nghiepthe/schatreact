import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';
import { AuthStackParmas, Screens } from '../../types/navigators';

type ContactDetailsProps = NativeStackScreenProps<AuthStackParmas, Screens.Call>
const HeaderMenu: React.FC = () => {
  const navigation = useNavigation<ContactDetailsProps>();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const onBtnSignoutClick = () => { };

  return (
    <Menu
      // {...props}
      statusBarHeight={StatusBar.currentHeight}
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButton icon="dots-vertical" color="white" onPress={openMenu} />
      }>
      <Menu.Item onPress={onBtnSignoutClick} title="Đăng xuất" />
      <Menu.Item onPress={() => { }} title="Lọc" />
      <Menu.Item onPress={() => { navigation.navigation.navigate(Screens.Call) }} title="Gọi" />
    </Menu>
  );
};

export default HeaderMenu;
