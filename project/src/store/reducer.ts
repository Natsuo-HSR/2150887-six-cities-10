import { filterPlaces } from './../utils/functions';
import { createReducer } from '@reduxjs/toolkit';
import { paris } from '../mocks/cities';
import { parisPlaces } from '../mocks/places';
import { changeCityAction, loadCityPlacesAction } from './actions';

const initialState = {
  city: paris,
  places: parisPlaces
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadCityPlacesAction, (state) => {
      state.places = filterPlaces(state.city);
    });
});
