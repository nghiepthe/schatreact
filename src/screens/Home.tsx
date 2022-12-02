import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CredentialState } from '@aries-framework/core';
import { AgentThunks, CredentialsSelectors, useAppDispatch, useAppSelector } from '@store';
import { Button } from 'react-native-paper';
import { RootStackParams, Screens } from '../types/navigators';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.Connetion>

const Home: React.FC<ContactDetailsProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const issuedCredentials = useAppSelector(CredentialsSelectors.credentialsRecordsByStateSelector(CredentialState.OfferReceived))
  // console.log("Home" + JSON.stringify(issuedCredentials, null, 4))
  const records = issuedCredentials.map(
    (index, i) => {
      // console.log("OfferReceived--------------1-------------- ", JSON.stringify(index, null, 4))
      // console.log(labels);
      return <TouchableOpacity
        key={i}
        style={{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: "space-between",
          paddingHorizontal: 2,
          borderColor: "#C0C0C0",
          borderBottomWidth: 1,
          padding: 5,
          marginTop: 2
        }}
        onPress={() => { navigation.navigate(Screens.DetailConnetionAgents) }}
      >
        <View style={{ width: "58%" }}><Text style={{fontSize:14}}>{String(index.id)}</Text></View>
        <View style={{ flexDirection: "row" }}>
          <Button
            color='#FFFFFF'
            style={{ backgroundColor: "#16A34A", margin: 2 }}
            onPress={() => {
              dispatch(AgentThunks.acceptOffer(index.id))
              // dispatch(AgentThunks.sendRequest(index.id))
            }}
          >
            Yes
          </Button>
          <Button
            color='#FFFFFF'
            style={{ backgroundColor: "#EF4444", margin: 2 }}
            onPress={() => {
              issuedCredentials.splice(i, 1)
              
            }}
          >
          No
        </Button>
      </View>
      </TouchableOpacity >
    }
  )

return (
  <View>
    <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
      <Text style={{ fontSize: 20 }}>All of acceptance Credentia</Text>
    </View>
    <ScrollView style={{ paddingHorizontal: 15, paddingTop: 5 }}>
      {records}
    </ScrollView>
  </View>
);
};

export default Home;
