import React from 'react';
import { Text } from 'react-native';
import { ConnectionsSelectors, useAppSelector } from '../store'
const AgentInfo: React.FC = () => {
    const a = useAppSelector(state => state.connections.connections)
    return (
        <>
            <Text>AgentInfo</Text>
            <Text>{a.isLoading}</Text>
            <Text>{JSON.stringify(a.records, null, 4)}</Text>
        </>
    );
};

export default AgentInfo;
