import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { isAnyOf } from '@reduxjs/toolkit';
import { RootState, useAppSelector } from '@store';
import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, ToggleButton } from 'react-native-paper';
import { RootStackParams, RootStackScreenProps, Screens, Stacks, } from '../types/navigators';

// type MenuProps = NativeStackScreenProps<TabStackParmas, Screens.Menu>
//const agent = useAppSelector((state: RootState) => state.agent);
// type Props = RootStackScreenProps<Stacks.TabStack>;
type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.Connetion>

const Connetion: React.FC<ContactDetailsProps> = ({ navigation }) => {
  const a = useAppSelector(state => state.connections.connections)
  const labels = [new Object]
  const records = a.records.map(
    (index, i) => {
      labels.push({ id: String(index.id), theirLabel: String(index.theirLabel) })

      
      return <TouchableOpacity
        key={i}
        style={{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: "space-between",
          //backgroundColor: "#00ABA9",
          paddingHorizontal: 2,
          borderColor: "#C0C0C0",
          borderBottomWidth: 1,
          padding: 5,
          marginTop: 2
        }}
        onPress={() => { navigation.navigate(Screens.DetailConnetionAgents) }}
      >
        <Text>{String(index.theirLabel)}</Text>
        <Button
          color='#FFFFFF'
          style={{ backgroundColor: "#EF4444" }}
          onPress={() => {
            Alert.alert("Delete")
          }}
        >
          Delete
        </Button>
      </TouchableOpacity>
    }
  )
  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        <View style={{ alignItems: "center", justifyContent: "center", display: 'flex' }}>
          <Text style={{ fontSize: 24, color: "#1BA1E2" }}>Agent Info</Text>
        </View>
        <Text style={{ fontSize: 18, padding: 5, color: "#212121" }}>The amount number of agent:</Text>
        {records}
      </ScrollView>
    </>
  );
};

export default Connetion;
