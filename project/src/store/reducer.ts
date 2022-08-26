import { createReducer } from '@reduxjs/toolkit';
import { City, Favorite, Offer, SortType } from './../types/types';
import { getOffers } from './../utils/functions';
import { paris } from '../constants/cities';
import {
  loadOffersAction,
  loadOffersByCityAction,
  sortOffersAction,
  setErrorAction,
  setIsOffersLoadedAction,
  loadFavoritesAction,
  clearErrorAction,
} from './actions';

type InitialState = {
  city: City,
  offers: Offer[],
  isOffersLoaded: boolean,
  favorites: Favorite[];
  sortType: SortType,
  error: string | null,
}

const initialState: InitialState = {
  city: paris,
  offers: [],
  isOffersLoaded: false,
  favorites: [],
  sortType: SortType.Popular,
  error: null
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersByCityAction, (state, action) => {
      state.isOffersLoaded = false;
      state.city = action.payload;
      state.offers = getOffers(state.offers, state.city, state.sortType);
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload;
      state.offers = getOffers(state.offers, state.city, state.sortType);
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = getOffers(action.payload, state.city, state.sortType);
    })
    .addCase(setIsOffersLoadedAction, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(loadFavoritesAction, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearErrorAction, (state) => {
      state.error = null;
    });
});
