import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'SET_CITY',
  SET_SORT_TYPE: 'SET_SORT_TYPE'
};

export const setCityAction = createAction(Action.SET_CITY, (value) => ({ payload: value }));
export const setSortTypeAction = createAction(Action.SET_SORT_TYPE, (value) => ({ payload: value }));
