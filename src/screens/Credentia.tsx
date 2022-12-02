import { CredentialState } from '@aries-framework/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConnectionThunks, useAppSelector } from '@store';
import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams, Screens } from '../types/navigators';
import { CredentialsSelectors } from '../store/index'

type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.Credentia>

const Credentia: React.FC<ContactDetailsProps> = ({ navigation }) => {
  const issuedCredentials = useAppSelector(CredentialsSelectors.credentialsRecordsByStateSelector(CredentialState.Done))
  const connection = useAppSelector(state => state.connections.connections)
  const CredentiaItem = issuedCredentials.map(
    (index, i) => {
      const credentialCardName = getCredentialCardName(index.metadata.get("_internal/indyCredential"));
      const isuerName = getIssuerName(index.connectionId, connection.records)
      const date = index.createdAt.getDate() + "/" + index.createdAt.getMonth() + "/" + index.createdAt.getFullYear()
      const dataCard = index.credentialAttributes
      // console.log(i, "-----------------------", JSON.stringify(index));
      return (
        <TouchableOpacity
          key={i}
          style={{ width: "100%", height: 180, backgroundColor: "#3B82F6", borderRadius: 10, paddingTop: 10, marginBottom: 10 }}
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
      )
    }
  )
  return (
    <ScrollView style={{ padding: 15 }}>
      <View style={{ padding: 5, alignItems: "center", marginBottom: 5, borderColor: "#C0C0C0", }}>
        <Text style={{ fontSize: 20 }}>Credentias</Text>
      </View>
      <View style={{}}>
        {CredentiaItem}
      </View>
    </ScrollView>
  );
};

export default Credentia;

function getCredentialCardName(metadata) {
  const schemaId = metadata.schemaId.split(":");
  // costum hook
  return schemaId[2]
}

function useSelectIssuer(connectionId: string | undefined) {
  const a = useAppSelector(state => state.connections.connections)
  const ret = a.records.map(
    index => {
      if (index.id == connectionId)
        return index.theirLabel || "null";
    }
  )
  return String(ret[0])
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

