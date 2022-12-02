import React, { useState } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { IconButton, Menu, Text } from 'react-native-paper';

export default function CredentialCard({ date, credentialCardName, isuerName }) {
    return (
        <View
            style={{ width: "100%", height: 180, backgroundColor: "#3B82F6", borderRadius: 10, paddingTop: 10, marginBottom: 10 }}        >
            <View style={{ flex: 1, padding: 5, paddingHorizontal: 15, alignItems: "flex-end", backgroundColor: "#1DA1F2", justifyContent: "center" }}>
                <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                    {date}
                </Text>
            </View>
            <View style={{ flexDirection: "row", flex: 5, padding: 15, alignItems: "flex-end" }}>
                <View style={{}}>
                    <Image source={require("../../assets/img/logo.jpg")} style={{ width: 50, height: 50 }}></Image>
                </View>
                <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 2, marginLeft: 6 }}>
                    <Text style={{ fontSize: 15, color: "#FFFFFF" }}>{credentialCardName}</Text>
                    <Text style={{ fontSize: 12, color: "#FFFFFF" }}>{isuerName}</Text>
                </View>
            </View>
        </View>
    );
};
