import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../constants/api';
import { City, Offer, Review, SortType, UserInfo } from '../types/types';

export const setOffers = createAction<Offer[]>('data/setOffers');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');
export const filterOffersByCity = createAction<City>('data/filterOffersByCity');
export const sortOffers = createAction<SortType>('data/sortOffers');
export const setReviews = createAction<Review[]>('data/setReviews');
export const setIsReviewsLoaded = createAction<boolean>('data/setIsReviewsLoaded');
export const setFavoriteOffers = createAction<Offer[]>('data/setFavoriteOffers');
export const setIsFavoriteOffersLoaded = createAction<boolean>('data/setIsFavoriteOffersLoaded');
export const setNearbyOffers = createAction<Offer[]>('data/setNearbyOffers');
export const setIsNearbyOffersLoaded = createAction<boolean>('data/setIsNearbyOffersLoaded');
export const setCurrentOffer = createAction<Offer | undefined>('data/setCurrentOffer');
export const setIsCurrentOfferLoaded = createAction<boolean>('data/setIsCurrentOfferLoaded');
export const setError = createAction<string | null>('data/setError');
export const clearError = createAction('data/clearError');
export const requireAuthorization = createAction<AuthorizationStatus>('auth/requireAuthorization');
export const setUserInfo = createAction<UserInfo>('auth/setUserInfo');
