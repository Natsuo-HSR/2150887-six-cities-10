import { dropUserInfo } from './../services/user-info';
import { AuthData, UserInfo, Review } from './../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../constants/routes';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/types';
import { dropToken, saveToken } from '../services/token';
import { saveUserInfo } from '../services/user-info';

export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    return data;
  },
);

export const fetchOfferById = createAsyncThunk<Offer | undefined, number, {
  extra: AxiosInstance
}>(
  'data/fetchOfferById',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoutes.OfferById.replace('{hotelId}', id.toString())}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], number, {
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Reviews.replace('{hotelId}', id.toString())}`);
    return data;
  },
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Favorites);
    return data;
  },
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], number, {
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoutes.Nearby.replace('{hotelId}', id.toString())}`);
    return data;
  },
);

export const postReview = createAsyncThunk<Review[], Review, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async (review, { extra: api }) => {
    const { data } = await api.post<Review[]>(
      `${APIRoutes.Reviews.replace('{hotelId}', review.id.toString())}`,
      { comment: review.comment, rating: review.rating }
    );
    return data;
  },
);

export const checkAuth = createAsyncThunk<UserInfo, undefined, {
  extra: AxiosInstance
}>(
  'auth/checkAuthorization',
  async (_arg, { extra: api }) => {
    const {data} = await api.get(APIRoutes.Login);
    return data;
  },
);

export const login = createAsyncThunk<UserInfo, AuthData, {
  extra: AxiosInstance
}>(
  'auth/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserInfo>(APIRoutes.Login, {email, password});
    const {id, email: userEmail, name, token, avatarUrl, isPro} = data;
    saveToken(token);
    saveUserInfo({
      id,
      email: userEmail,
      name,
      token,
      avatarUrl,
      isPro,
    });
    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUserInfo();
  },
);
