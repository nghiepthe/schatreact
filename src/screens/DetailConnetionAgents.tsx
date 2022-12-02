import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppSelector } from '@store';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParams, Screens } from '../types/navigators';

type ContactDetailsProps = NativeStackScreenProps<RootStackParams, Screens.DetailConnetionAgents>

const DetailConnetionAgents: React.FC<ContactDetailsProps> = ({ navigation }) => {

  const a = useAppSelector(state => state.connections.connections)
  // const labels = [new Object]
  const Credentia = a.records.map(
    (index, i) => {
      // console.log("records " + JSON.stringify(index, null, 4))
      // labels.push({ id: String(index.id), theirLabel: String(index.theirLabel) })
      // console.log(labels);
      if(index.id == ""){
        return (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text>theirLabel</Text>
              <Text>{String(index.theirLabel)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>theirDid</Text>
              <Text>{String(index.theirDid)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>autoAcceptConnection</Text>
              <Text>{String(index.autoAcceptConnection)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>state</Text>
              <Text>{String(index.state)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>role</Text>
              <Text>{String(index.role)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>threadId</Text>
              <Text>{String(index.threadId)}</Text>
            </View>
            <View>
              <Text>theirDid</Text>
              <Text>{String(index.theirDid)}</Text>
            </View>
          </View>
        )
      }
    }
  )
  return (
    <View>
      <Text>DetailConnetionAgents</Text>
      <ScrollView>
        {Credentia}
      </ScrollView>
    </View>
  );
};

export default DetailConnetionAgents;
