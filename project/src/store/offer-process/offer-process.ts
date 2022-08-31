import { createAction, createSlice } from '@reduxjs/toolkit';
import { fetchOfferById, fetchNearbyOffers, fetchFavoriteOffers, putFavoriteOffer } from './../api-actions';
import { getOffers } from './../../utils/functions';
import { NameSpace } from '../../constants/namespaces';
import { OfferProcess } from '../../types/state';
import { City, SortType } from '../../types/types';
import { paris } from '../../constants/cities';
import { fetchOffers } from '../api-actions';

export const initialState: OfferProcess = {
  city: paris,
  sortType: SortType.Popular,
  offers: [],
  isOffersLoaded: false,
  currentOffer: undefined,
  isCurrentOfferLoaded: false,
  nearbyOffers: [],
  isNearbyOffersLoaded: false,
  favorites: [],
  isFavoritesLoaded: false,
  isNeedToReload: false,
};

export const setCity = createAction<City>('offer/setCity');
export const sortOffers = createAction<SortType>('offer/sortOffers');

export const setIsNeedToReload = createAction<boolean>('offer/setIsNeedToReload');

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setIsNeedToReload, (state, action) => {
        state.isNeedToReload = action.payload;
      })
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(sortOffers, (state, action) => {
        state.isOffersLoaded = false;
        state.sortType = action.payload;
        state.offers = getOffers(state.offers, state.city, state.sortType);
        state.isOffersLoaded = true;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoaded = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = getOffers(action.payload, state.city, state.sortType);
        state.isOffersLoaded = true;
      })
      .addCase(fetchOfferById.pending, (state) => {
        state.isCurrentOfferLoaded = false;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferLoaded = true;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.currentOffer = undefined;
        state.isCurrentOfferLoaded = true;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isNearbyOffersLoaded = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoaded = true;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoritesLoaded = false;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoaded = true;
      })
      .addCase(putFavoriteOffer.fulfilled, (state) => {
        state.isNeedToReload = true;
      });
  }
});
