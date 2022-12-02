import { CredentialState, ProofEventTypes, ProofState, ProofStateChangedEvent } from '@aries-framework/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AgentThunks, ConnectionThunks, onLoadingComplete, useAppDispatch, useAppSelector } from '@store';
import React, { useContext, useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams, Screens } from '../types/navigators';
import { CredentialsSelectors } from '../store/index';
import { Button, Checkbox } from 'react-native-paper';
// import {ColorPallet} from '../themes'

type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.Credentia>
const Signin: React.FC<ContactDetailsProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const issuedCredentials = useAppSelector(CredentialsSelectors.credentialsRecordsByStateSelector(CredentialState.Done))
  
  const data: Boolean[] = new Array(issuedCredentials.length).fill(false);
  const [checked, setChecked] = React.useState(data);
  const connection = useAppSelector(state => state.connections.connections)

  const onSend = async () => {
    const response = await fetch("http://10.0.2.2:3000/agent/get-login-url")
    const url = await response.text();
    console.log("URL: ",url);
    dispatch(AgentThunks.sendRequest(url))
  }

  const handleCheck = (i) => {
    let updatedList = [...checked];
    updatedList[i] = !updatedList[i]
    // updatedList.splice(checked.indexOf(i), 1);
    setChecked(updatedList);
  };

  const CardName = "Identity";
  const CredentiaItem = issuedCredentials.map(
    (index, i) => {
      const credentialCardName = getCredentialCardName(index.metadata.get("_internal/indyCredential"));
      const isuerName = getIssuerName(index.connectionId, connection.records)
      const date = index.createdAt.getDate() + "/" + index.createdAt.getMonth() + "/" + index.createdAt.getFullYear()
      const dataCard = index.credentialAttributes
      if (credentialCardName == CardName) {
        return (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              key={i}
              style={{ width: "90%", height: 180, backgroundColor: "#1DA1F2", borderRadius: 10, paddingTop: 10, marginBottom: 10 }}
              onPress={() => {
                navigation.navigate(
                  Screens.DetailCredentialAgents,
                  {
                    CardName: credentialCardName,
                    isuerName: isuerName,
                    date: date,
                    dataCard: dataCard,
                  }
                )
              }}
            >
              <View style={{ flex: 1, padding: 5, paddingHorizontal: 15, alignItems: "flex-end", backgroundColor: "#1DA1F2", justifyContent: "center" }}>
                <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                  {date}
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 5, padding: 15, alignItems: "flex-end" }}>
                <View style={{}}>
                  <Image source={require("../assets/img/logo.jpg")} style={{ width: 50, height: 50 }}></Image>
                </View>
                <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 2, marginLeft: 6 }}>
                  <Text style={{ fontSize: 15, color: "#FFFFFF" }}>{credentialCardName}</Text>
                  <Text style={{ fontSize: 12, color: "#FFFFFF" }}>{isuerName}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Checkbox
              status={checked[i] ? 'checked' : 'unchecked'}
              onPress={() => handleCheck(i)}
              color="#1DA1F2"
            />
          </View>
        )
      }
    }
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20 }}>Send sigin information</Text>
      </View>
      <ScrollView style={{ marginHorizontal: 15 }}>
        {CredentiaItem}
      </ScrollView>
      <View style={{ padding: 15 }}>
        <Button onPress={() => onSend()} color="#FFFFFF" style={{ backgroundColor: "#1DA1F2" }}>Send</Button>
      </View>
    </View>
  );
};

export default Signin;

function getCredentialCardName(metadata) {
  const schemaId = metadata.schemaId.split(":");
  // costum hook
  return schemaId[2]
}

function getIssuerName(id: string | undefined, connection): string {
  try {
    const theirLabel = connection.filter(index => index.id == id)
    return theirLabel[0].theirLabel || "null";
  } catch (error) {
    console.log(error);
    return "erro"
  }
}