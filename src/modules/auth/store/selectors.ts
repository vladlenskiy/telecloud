import { RootState } from '@src/store/store';
import { createSelector } from '@reduxjs/toolkit';
import { AuthStore } from '@src/modules/auth/store/index';

const authStateSelector = (state: RootState): AuthStore => state.auth;

export const isAuthCheckedSelector = createSelector(
  authStateSelector,
  state => state.isAuthChecked,
);

export const isAuthCheckingSelector = createSelector(
  authStateSelector,
  state => state.isAuthChecking,
);

export const isLoginLoadingSelector = createSelector(
  authStateSelector,
  state => state.isLoginLoading,
);
