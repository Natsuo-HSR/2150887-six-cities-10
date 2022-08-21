import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  LOAD_CITY_PLACES: 'LOAD_CITY_PLACES'
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value) => ({ payload: value }));
export const loadCityPlacesAction = createAction(Action.LOAD_CITY_PLACES);
