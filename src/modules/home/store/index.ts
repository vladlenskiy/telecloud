import { createSlice } from '@reduxjs/toolkit';
import { loadProfile } from '@src/modules/home/store/actions';

export type State = {
  profile: any;
};

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    profile: null,
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
  },
});

const homeStore = homeSlice.reducer;
export type HomeStore = ReturnType<typeof homeStore>;
export default homeStore;
