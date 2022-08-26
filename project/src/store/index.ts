import { configureStore } from '@reduxjs/toolkit';
import { createSixCitiesApi } from '../services/api';
import { updateStore } from './reducer';

export const api = createSixCitiesApi();

export const store = configureStore({
  reducer: updateStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
