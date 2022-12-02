import { useAppDispatch, useAppSelector } from '@store';
import React, { useState } from 'react';
import { View } from 'react-native';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { AgentThunks } from '@store';
import { Button, TextInput } from 'react-native-paper';

const Input: React.FC = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState("")
    const onRead = async () => {
        // e: BarCodeReadEvent
        // console.log(e.data)
        // console.log(e.data);
        console.log(text)
        dispatch(AgentThunks.initializeAgentConnetion(text))
    };

    return (
        <View
            style={{
                // flex: 1
            }}>
            <TextInput label={"Link"} value={text} onChangeText={(TextInput) => setText(TextInput)}></TextInput>
            <Button onPress={() => onRead()}>Send</Button>
        </View>
    );
};

export default Input;
