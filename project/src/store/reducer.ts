import { createReducer } from '@reduxjs/toolkit';
import { City, Offer, SortType, Review } from './../types/types';
import { getOffers } from './../utils/functions';
import { paris } from '../constants/cities';
import {
  setOffers,
  filterOffersByCity,
  sortOffers,
  setError,
  setIsOffersLoaded,
  setFavoriteOffers,
  clearError,
  requireAuthorization,
  setCurrentOffer,
  setIsCurrentOfferLoaded,
  setReviews,
  setIsReviewsLoaded,
  setIsFavoriteOffersLoaded,
  setNearbyOffers,
  setIsNearbyOffersLoaded,
} from './actions';
import { AuthorizationStatus } from '../constants/api';

type InitialState = {
  city: City,
  offers: Offer[],
  isOffersLoaded: boolean,
  currentOffer: Offer | undefined,
  isCurrentOfferLoaded: boolean,
  favorites: Offer[],
  isFavoritesLoaded: boolean,
  nearbyOffers: Offer[],
  isNearbyOffersLoaded: boolean,
  reviews: Review[],
  isReviewsLoaded: boolean,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
}

const initialState: InitialState = {
  city: paris,
  offers: [],
  currentOffer: undefined,
  isCurrentOfferLoaded: false,
  isOffersLoaded: false,
  favorites: [],
  isFavoritesLoaded: false,
  nearbyOffers: [],
  isNearbyOffersLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(filterOffersByCity, (state, action) => {
      state.isOffersLoaded = false;
      state.city = action.payload;
      state.offers = getOffers(state.offers, state.city, state.sortType);
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
      state.offers = getOffers(state.offers, state.city, state.sortType);
    })
    .addCase(setOffers, (state, action) => {
      state.offers = getOffers(action.payload, state.city, state.sortType);
    })
    .addCase(setIsOffersLoaded, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setIsCurrentOfferLoaded, (state, action) => {
      state.isCurrentOfferLoaded = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setIsFavoriteOffersLoaded, (state, action) => {
      state.isFavoritesLoaded = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setIsNearbyOffersLoaded, (state, action) => {
      state.isNearbyOffersLoaded = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsReviewsLoaded, (state, action) => {
      state.isReviewsLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
