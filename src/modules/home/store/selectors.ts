import { RootState } from '@src/store/store';
import { HomeStore } from '@src/modules/home/store/index';
import { createSelector } from '@reduxjs/toolkit';

const homeStateSelector = (state: RootState): HomeStore => state.home;

export const profileSelector = createSelector(
  homeStateSelector,
  state => state.profile,
);
