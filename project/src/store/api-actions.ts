import { Favorite } from './../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/routes';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/types';
import { Action, loadOffersAction, setIsOffersLoadedAction, loadFavoritesAction, setErrorAction } from './actions';
import { ERROR_MESSAGE_DELETE } from '../constants/api';
import { store } from '.';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.LOAD_OFFERS,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
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
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
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
