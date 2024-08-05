import { createSlice } from '@reduxjs/toolkit';
import {
  checkAuth,
  login,
  login2FA,
  sendCode,
} from '@src/modules/auth/store/actions';

export type State = {
  phone: string;
  phone_code_hash: string;
  isSendCodeLoading: boolean;
  isLoginLoading: boolean;
  user: any | null;
  isAuthChecked: boolean;
  isAuthChecking: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phone: '',
    phone_code_hash: '',
    isSendCodeLoading: false,
    isLoginLoading: false,
    user: null,
    isAuthChecked: false,
    isAuthChecking: true,
  } as State,
  reducers: {},
  extraReducers: builder => {
    // Send Code
    builder.addCase(sendCode.pending, (state: State) => {
      state.isSendCodeLoading = true;
    });
    builder.addCase(sendCode.fulfilled, (state: State, { payload }) => {
      state.phone = payload.phone;
      state.phone_code_hash = payload.phone_code_hash;
      state.isSendCodeLoading = false;
    });
    builder.addCase(sendCode.rejected, (state: State) => {
      state.isSendCodeLoading = false;
    });
    // Login
    builder.addCase(login.pending, (state: State) => {
      state.isLoginLoading = true;
    });
    builder.addCase(login.fulfilled, (state: State, { payload }) => {
      state.isLoginLoading = false;
    });
    builder.addCase(login.rejected, (state: State) => {
      state.isLoginLoading = false;
    });
    // Login2FA
    builder.addCase(login2FA.pending, (state: State) => {
      state.isLoginLoading = true;
    });
    builder.addCase(login2FA.fulfilled, (state: State, { payload }) => {
      state.isLoginLoading = false;
    });
    builder.addCase(login2FA.rejected, (state: State) => {
      state.isLoginLoading = false;
    });
    // Check Auth
    builder.addCase(checkAuth.pending, state => {
      state.isAuthChecking = true;
    });
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload;
        state.isAuthChecked = true;
      }
      state.isAuthChecking = false;
    });
    builder.addCase(checkAuth.rejected, state => {
      state.isAuthChecking = false;
    });
  },
});

const authStore = authSlice.reducer;
export type AuthStore = ReturnType<typeof authStore>;
export default authStore;
