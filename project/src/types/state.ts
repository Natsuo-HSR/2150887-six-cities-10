import { City, Offer, Review, SortType } from './types';
import { AuthorizationStatus } from '../constants/api';
import { store } from '../store/index';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  reviews: Review[],
  isReviewsLoaded: boolean,
  error?: string | null,
};

export type OfferProcess = {
  city: City,
  sortType: SortType,
  offers: Offer[],
  isOffersLoaded: boolean,
  currentOffer: Offer | undefined,
  isCurrentOfferLoaded: boolean,
  favorites: Offer[],
  isFavoritesLoaded: boolean,
  nearbyOffers: Offer[],
  isNearbyOffersLoaded: boolean,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
