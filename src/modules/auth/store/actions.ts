import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@src/modules/auth/domain/AuthService';
import { SendCode } from '@src/modules/auth/domain/interfaces/SendCode';
import { RootState } from '@src/store/store';
import MtProtoResource from '@src/modules/core/infrastructure/MtProtoResource';
import { navigateAndReset } from '@src/modules/navigation/RootNavigation';
import screenNames from '@src/modules/navigation/screen-names';

const PREFIX = 'auth';

export const sendCode = createAsyncThunk<SendCode, string>(
  `${PREFIX}/sendCode`,
  phone => {
    return authService.sendCode(phone);
  },
);

export const checkAuth = createAsyncThunk(`${PREFIX}/checkAuth`, _ => {
  try {
    return authService.checkAuth();
  } catch (err) {
    return null;
  }
});

export const login = createAsyncThunk<void, any>(
  `${PREFIX}/login`,
  async ({ phoneCode, onSlideContent }, { getState }) => {
    try {
      const state = getState() as RootState;

      const res = await authService.login({
        phone_code_hash: state.auth.phone_code_hash,
        phone_code: phoneCode,
        phone_number: state.auth.phone,
      });

      if (res) {
        navigateAndReset(screenNames.home, {});
      }
    } catch (err) {
      console.log(err);
      if (err.error_message === 'SESSION_PASSWORD_NEEDED') {
        onSlideContent(2, 200);
      }
    }
  },
);

export const login2FA = createAsyncThunk<void, any>(
  `${PREFIX}/login2FA`,
  async ({ password }) => {
    try {
      const { srp_id, current_algo, srp_B } = await MtProtoResource.call(
        'account.getPassword',
      );
      const { g, p, salt1, salt2 } = current_algo;

      const { A, M1 } = await MtProtoResource.crypto.getSRPParams({
        g,
        p,
        salt1,
        salt2,
        gB: srp_B,
        password,
      });

      await MtProtoResource.call('auth.checkPassword', {
        password: {
          _: 'inputCheckPasswordSRP',
          srp_id,
          A,
          M1,
        },
      });

      if (A && M1) {
        navigateAndReset(screenNames.home, {});
      }
    } catch (err) {
      console.log(err);
    }
  },
);
