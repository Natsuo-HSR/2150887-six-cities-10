import { fetchReviews, postReview } from './../api-actions';
import {createAction, createSlice} from '@reduxjs/toolkit';
import { DataProcess } from '../../types/state';
import { NameSpace } from '../../constants/namespaces';
import { fetchOffers } from '../api-actions';
import { sortReviews } from '../../utils/functions';
import { SortType } from '../../types/types';

export const initialState: DataProcess = {
  reviews: [],
  isReviewsLoaded: false,
  error: null
};

export const setError = createAction<string | null>('data/getError');

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoaded = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = sortReviews(action.payload, SortType.DateByNew);
        state.isReviewsLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(postReview.pending, (state) => {
        state.isReviewsLoaded = false;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = sortReviews(action.payload, SortType.DateByNew);
        state.isReviewsLoaded = true;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  }
});
