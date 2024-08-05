import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import reducers from './reducers';

export const rootReducer = combineReducers(reducers);

const middleware = getDefaultMiddleware({ serializableCheck: false });

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<(typeof store)['getState']>;
export default store;
