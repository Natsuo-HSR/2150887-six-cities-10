import { getOffers } from './../utils/functions';
import { createReducer } from '@reduxjs/toolkit';
import { paris } from '../constants/cities';
import { parisOffers } from '../mocks/offers';
import { setCityAction, setSortTypeAction } from './actions';
import { SortType } from '../types/types';

const initialState = {
  city: paris,
  offers: parisOffers,
  sortType: SortType.Popular
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
      state.offers = getOffers(state.city, state.sortType);
    })
    .addCase(setSortTypeAction, (state, action) => {
      state.sortType = action.payload;
      state.offers = getOffers(state.city, state.sortType);
    });
});
