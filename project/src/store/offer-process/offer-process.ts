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
};

export const setCity = createAction<City>('offer/setCity');
export const sortOffers = createAction<SortType>('offer/sortOffers');

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      .addCase(putFavoriteOffer.fulfilled, (state, action) => {
        const modifiedOffer = action.payload;
        // update current offer
        if (state.currentOffer && state.currentOffer.id === modifiedOffer.id) {
          state.isCurrentOfferLoaded = false;
          state.currentOffer = modifiedOffer;
          state.isCurrentOfferLoaded = true;
        }

        // update favorites
        state.isFavoritesLoaded = false;
        if (modifiedOffer.isFavorite) {
          state.favorites.push(modifiedOffer);
        } else {
          state.favorites = state.favorites.filter((favorite) => favorite.id !== modifiedOffer.id);
        }
        state.isFavoritesLoaded = true;

        // update offers
        const oldOffer = state.offers.find((offer) => offer.id === modifiedOffer.id);
        if (oldOffer) {
          state.isOffersLoaded = false;
          const updatedOffers = state.offers.map((offer) => offer.id === modifiedOffer.id ? modifiedOffer : offer);
          state.offers = getOffers(updatedOffers, state.city, state.sortType);
          state.isOffersLoaded = true;
        }

        // update nearby
        const oldNearby = state.nearbyOffers.find((offer) => offer.id === modifiedOffer.id);
        if (oldNearby) {
          state.isNearbyOffersLoaded = false;
          const updatedNearby = state.nearbyOffers.map((offer) => offer.id === modifiedOffer.id ? modifiedOffer : offer);
          state.nearbyOffers = updatedNearby;
          state.isNearbyOffersLoaded = true;
        }
      });
  }
});
