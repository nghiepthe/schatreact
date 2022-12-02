import { createSlice } from '@reduxjs/toolkit';

interface AuthenticateState {
    isLoading: boolean;
    isSignout: boolean;
}

const initialState: AuthenticateState = {
    isLoading: true,
    isSignout: false,
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {
        onLoadingComplete(state) {
            state.isLoading = false;
            state.isSignout = true;
        },
    },
});

export const { onLoadingComplete } = authenticateSlice.actions;
export { authenticateSlice }
export type { AuthenticateState }