import { Review } from './../../types/types';
import { NameSpace } from '../../constants/namespaces';
import { State } from '../../types/state';

export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.Data].isReviewsLoaded;

export const getErrorMessage = (state: State): string | null | undefined => state[NameSpace.Data].error;
