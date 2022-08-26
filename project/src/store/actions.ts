import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'SET_CITY',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_IS_OFFERS_LOADED: 'SET_IS_OFFERS_LOADED',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

export const setCityAction = createAction(Action.SET_CITY, (value) => ({ payload: value }));
export const setSortTypeAction = createAction(Action.SET_SORT_TYPE, (value) => ({ payload: value }));
export const loadOffersAction = createAction(Action.LOAD_OFFERS, (value) => ({ payload: value }));
export const setIsOffersLoadedAction = createAction(Action.SET_IS_OFFERS_LOADED, (value) => ({ payload: value }));
export const loadFavoritesAction = createAction(Action.LOAD_FAVORITES, (value) => ({ payload: value }));
export const setErrorAction = createAction(Action.SET_ERROR, (value) => ({ payload: value }));
export const clearErrorAction = createAction(Action.CLEAR_ERROR);
