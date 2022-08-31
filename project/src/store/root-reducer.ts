import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/namespaces';
import { dataProcess } from './data-process/data-process';
import { offerProcess } from './offer-process/offer-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
