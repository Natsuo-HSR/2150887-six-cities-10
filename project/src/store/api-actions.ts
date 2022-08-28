import { dropUserInfo } from './../services/user-info';
import { AuthData, Favorite, UserInfo } from './../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../constants/routes';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/types';
import { Action, loadOffersAction, setIsOffersLoadedAction, loadFavoritesAction, setErrorAction, requireAuthorizationAction } from './actions';
import { AuthorizationStatus, ERROR_MESSAGE_DELETE } from '../constants/api';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';
import { saveUserInfo } from '../services/user-info';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.LOAD_OFFERS,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    dispatch(loadOffersAction(data));
    dispatch(setIsOffersLoadedAction(true));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.LOAD_FAVORITES,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    const amsterdamFavorites = data.filter((offer) => offer.city.name === 'Amsterdam');
    const cologneFavorites = data.filter((offer) => offer.city.name === 'Cologne');
    const favorites: Favorite[] = [
      {
        cityName: 'Amsterdam',
        offers: amsterdamFavorites
      },
      {
        cityName: 'Cologne',
        offers: cologneFavorites
      }
    ];
    dispatch(loadFavoritesAction(favorites));
  },
);

export const clearErrorAction = createAsyncThunk(
  Action.CLEAR_ERROR,
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      ERROR_MESSAGE_DELETE,
    );
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.CHECK_AUTHORIZATION,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.LOGIN,
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
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.LOGOUT,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUserInfo();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  },
);
