import { useAppDispatch, useAppSelector } from '@store';
import React, { useState } from 'react';
import { View } from 'react-native';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { AgentThunks } from '@store';

const Scan: React.FC = () => {
  const dispatch = useAppDispatch();
  const onRead = async (e: BarCodeReadEvent) => {
    // e: BarCodeReadEvent
    // console.log(e.data)
    // console.log(e.data);
    dispatch(AgentThunks.initializeAgentConnetion(e.data))
  };

  return (
    <View
      style={{
        flex: 1
      }}>
      <QRCodeScanner
        onRead={onRead}
        reactivateTimeout={5000}
        cameraStyle={{ width: "100%", height: "100%" }}
        reactivate={true}
      />
    </View>
  );
};

export default Scan;
