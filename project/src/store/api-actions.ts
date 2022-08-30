import { dropUserInfo } from './../services/user-info';
import { AuthData, UserInfo, Review } from './../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../constants/routes';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/types';
import {
  setOffers,
  setIsOffersLoaded,
  setFavoriteOffers,
  setError,
  requireAuthorization,
  setCurrentOffer,
  setIsCurrentOfferLoaded,
  setReviews,
  setIsReviewsLoaded,
  setIsFavoriteOffersLoaded,
  setNearbyOffers,
  setIsNearbyOffersLoaded,
} from './actions';
import { AuthorizationStatus, ERROR_MESSAGE_DELETE } from '../constants/api';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';
import { saveUserInfo } from '../services/user-info';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    dispatch(setOffers(data));
    dispatch(setIsOffersLoaded(true));
  },
);

export const fetchCurrentOffer = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoutes.CurrentOffer.replace('{hotelId}', id.toString())}`);
      dispatch(setCurrentOffer(data));
    } catch {
      dispatch(setCurrentOffer(undefined));
    } finally {
      dispatch(setIsCurrentOfferLoaded(true));
    }
  },
);

export const fetchReviews = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    dispatch(setIsReviewsLoaded(false));
    const { data } = await api.get<Review[]>(`${APIRoutes.Reviews.replace('{hotelId}', id.toString())}`);
    dispatch(setReviews(data));
    dispatch(setIsReviewsLoaded(true));
  },
);

export const fetchFavoriteOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Favorites);
    dispatch(setFavoriteOffers(data));
    dispatch(setIsFavoriteOffersLoaded(true));
  },
);

export const fetchNearbyOffers = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoutes.Nearby.replace('{hotelId}', id.toString())}`);
    dispatch(setNearbyOffers(data));
    dispatch(setIsNearbyOffersLoaded(true));
  },
);

export const postReview = createAsyncThunk<void, Review, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async (review, { dispatch, extra: api }) => {
    dispatch(setIsReviewsLoaded(false));
    const { data } = await api.post<Review[]>(
      `${APIRoutes.Reviews.replace('{hotelId}', review.id.toString())}`,
      { comment: review.comment, rating: review.rating }
    );
    dispatch(setReviews(data));
    dispatch(setIsReviewsLoaded(true));
  },
);

export const clearError = createAsyncThunk(
  'data/setError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_MESSAGE_DELETE,
    );
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {id, email: userEmail, name, token, avatarUrl, isPro}} = await api.post<UserInfo>(APIRoutes.Login, {email, password});
    saveToken(token);
    saveUserInfo({
      id,
      email: userEmail,
      name,
      token,
      avatarUrl,
      isPro,
    });
    dispatch(requireAuthorization(AuthorizationStatus.Auth));

  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUserInfo();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
