import type { TypedUseSelectorHook } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import {
  agentSlice, connectionsSlice, credentialsSlice, mediationSlice, proofsSlice
} from './aries/slices';
import { authenticateSlice } from './slices/authenticate';
import { themesSlice } from './slices/theme';

const rootReducer = combineReducers({
  agent: agentSlice.reducer,
  connections: connectionsSlice.reducer,
  credentials: credentialsSlice.reducer,
  proofs: proofsSlice.reducer,
  mediation: mediationSlice.reducer,
  themes: themesSlice.reducer,
  authenticate: authenticateSlice.reducer
});

type RootState = ReturnType<typeof rootReducer>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          'proofs.proofs.records',
          'connections.connections.records',
          'credentials.credentials.records',
          'mediation.mediation.records',
        ],
        // ignoredActionPaths:[
        //   'payload.*',
        // ]
      },
      thunk: {
        extraArgument: {
          agent: undefined,
        },
      },
    }),
});

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch, useAppSelector };
export type { RootState };


