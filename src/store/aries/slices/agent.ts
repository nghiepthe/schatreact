import type { AgentThunkApiConfig } from '../utils'
import type { SerializedError } from '@reduxjs/toolkit'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Agent, ConnectionEventTypes, ConnectionStateChangedEvent, CredentialEventTypes, CredentialState, CredentialStateChangedEvent, DidExchangeState, ProofEventTypes, ProofState, ProofStateChangedEvent, RetrievedCredentials } from '@aries-framework/core'
import { store } from '@store/store'
import { createContext } from 'react'

export interface AgentState {
  isInitializing: boolean
  isInitialized: boolean
  error: null | SerializedError
}

const initialState: AgentState = {
  isInitializing: false,
  isInitialized: false,
  error: null,
}

const AgentThunks = {

  initializeAgent: createAsyncThunk<boolean, Agent, AgentThunkApiConfig>('agent/initialize', async (agent, thunkApi) => {
    await agent.initialize()
    agent.events.on<ConnectionStateChangedEvent>(ConnectionEventTypes.ConnectionStateChanged, async ({ payload }) => {
      console.log(payload.connectionRecord.state)
      console.log(`Connection for out-of-band id ${payload.connectionRecord.outOfBandId} completed`)
      
    });
    agent.events.on<CredentialStateChangedEvent>(CredentialEventTypes.CredentialStateChanged, async ({ payload }) => {
      console.log(payload.credentialRecord.state);
    })
    agent.events.on<ProofStateChangedEvent>(
      ProofEventTypes.ProofStateChanged,
      async ({ payload }) => {
        console.log("payload+++++++++", payload);
        switch (payload.proofRecord.state) {
          case ProofState.RequestReceived:
            console.log('received a proof request');
            const { id, metadata, connectionId, } = payload.proofRecord
            console.log(id, metadata, connectionId);
            const retrievedCredentials =
              await agent.proofs.getRequestedCredentialsForProofRequest(
                payload.proofRecord.id,
                {
                  filterByPresentationPreview: true,
                },
              );
            const requestedCredentials =
              agent.proofs.autoSelectCredentialsForProofRequest(
                retrievedCredentials,
              );
            await agent.proofs.acceptRequest(
              payload.proofRecord.id,
              requestedCredentials,
            );
            break;
        }
      },
    );
    thunkApi.extra.agent = agent
    return true
  }),

  initializeAgentConnetion: createAsyncThunk<boolean, string, AgentThunkApiConfig>('agent/initializeAgentConnetion', async (url, thunkApi) => {
    // console.log(url)
    if (thunkApi.extra.agent) {
      const connection = await thunkApi.extra.agent.oob.receiveInvitationFromUrl(url)
      // const connectionRecord = thunkApi.extra.agent.connections.returnWhenIsConnected(connection.outOfBandRecord.id)
      // console.log(connectionRecord)
    } else {
      console.log("Agent is not initialized!!")
    }
    return true
  }),

  acceptOffer: createAsyncThunk<boolean, string, AgentThunkApiConfig>('agent/acceptOffer', async (id, thunkApi) => {
    console.log("acceptOffer ",id);
    await thunkApi.extra.agent?.credentials.acceptOffer({ credentialRecordId: id });
    await thunkApi.extra.agent?.credentials.acceptRequest({ credentialRecordId: id })
    await thunkApi.extra.agent?.credentials.acceptCredential({ credentialRecordId: id })
    return true
  }),

  sendRequest: createAsyncThunk<boolean, string, AgentThunkApiConfig>('agent/initialize', async (id, thunkApi) => {
    // await thunkApi.extra.agent?.credentials.acceptRequest({credentialRecordId: id})
    // await thunkApi.extra.agent?.credentials.acceptCredential({credentialRecordId: id})
    return true
  }),

  sendCredentia: createAsyncThunk<boolean, string, AgentThunkApiConfig>('agent/sendCredentia', async (url, thunkApi) => {
    const connection = await thunkApi.extra.agent?.oob.receiveInvitationFromUrl(url)
    const credentials = await thunkApi.extra.agent?.proofs.getRequestedCredentialsForProofRequest(connection?.connectionRecord?.id!, {
      filterByNonRevocationRequirements: false,
    })
    const automaticRequestedCreds = thunkApi.extra.agent?.proofs.autoSelectCredentialsForProofRequest(credentials!)
    await thunkApi.extra.agent?.proofs.acceptRequest(connection?.connectionRecord?.id!, automaticRequestedCreds!)
    // await thunkApi.extra.agent?.
    return true
  }),
}

const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AgentThunks.initializeAgent.pending, (state) => {
        state.isInitializing = true
      })
      .addCase(AgentThunks.initializeAgent.rejected, (state, action) => {
        state.isInitializing = false
        state.isInitialized = false
        state.error = action.error
      })
      .addCase(AgentThunks.initializeAgent.fulfilled, (state) => {
        state.isInitializing = false
        state.isInitialized = true
      })
  },
})

export { agentSlice, AgentThunks }
