import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RootStackParams, Screens } from '../types/navigators';

type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.DetailConnetionAgents>

const DetailCredentialAgents: React.FC<ContactDetailsProps> = ({ navigation, route }) => {
  if (!route?.params) {
    throw new Error('Credentia route prams were not set properly')
  }
  const { CardName, isuerName, date, dataCard } = route.params;
  const option = ["ID", "Name","Role"]
  const data = (option, dataCard) => {
    if (option == "ID") return dataCard[0].value
    else {
      if (option == "Name") return dataCard[1].value
      else {
        if (option == "Role") return dataCard[2].value
      }
    }
  }
  const RenderItem = ({ time, link, CardName, isuerName, dataCard }) => {
    return (
      <View>
        <View style={{ width: "100%", height: 180, backgroundColor: "#3B82F6", borderRadius: 10, paddingTop: 10, marginBottom: 10 }}>
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
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>{CardName}</Text>
              <Text style={{ fontSize: 12, color: "#FFFFFF" }}>{isuerName}</Text>
            </View>
          </View>
        </View>
        <View>
          {option.map((index) => {
            return (
              <View style={{
                borderColor: "#C0C0C0",
                borderBottomWidth: 1,
                padding: 10,
                marginTop: 2
              }}>
                <Text>{index}</Text>
                <Text>
                  {
                    data(index, dataCard)
                  }
                </Text>
              </View>
            )
          })}
          {/* <View style={{
            borderColor: "#C0C0C0",
            borderBottomWidth: 1,
            padding: 10,
            marginTop: 2
          }}>
            <Text>Name</Text>
            <Text>{dataCard[1].value}</Text>
          </View>
          <View style={{
            borderColor: "#C0C0C0",
            borderBottomWidth: 1,
            padding: 10,
            marginTop: 2
          }}>
            <Text>Role</Text>
            <Text>{dataCard[2].value}</Text>
          </View> */}
        </View>
      </View>
    )
  }
  return (
    <View style={{ padding: 15 }}>
      <View style={{ padding: 5, alignItems: "center", marginBottom: 5, borderColor: "#C0C0C0", }}>
        <Text style={{ fontSize: 20 }}>Credentias</Text>
      </View>
      <RenderItem time={date} link={"../assets/img/logo.jpg"} CardName={CardName} isuerName={isuerName} dataCard={dataCard} />
    </View>
  );
};

export default DetailCredentialAgents;
