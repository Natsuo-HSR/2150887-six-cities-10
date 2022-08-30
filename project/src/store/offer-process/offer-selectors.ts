import { City, Offer, SortType } from './../../types/types';
import { NameSpace } from '../../constants/namespaces';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Offer].city;
export const getSortType = (state: State): SortType => state[NameSpace.Offer].sortType;

export const getOffers = (state: State): Offer[] => state[NameSpace.Offer].offers;
export const getIsOffersLoaded = (state: State): boolean => state[NameSpace.Offer].isOffersLoaded;

export const getCurrentOffer = (state: State): Offer | undefined => state[NameSpace.Offer].currentOffer;
export const getIsCurrentOfferLoaded = (state: State): boolean => state[NameSpace.Offer].isCurrentOfferLoaded;

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offer].nearbyOffers;
export const getIsNearbyOffersLoaded = (state: State): boolean => state[NameSpace.Offer].isNearbyOffersLoaded;

export const getFavorites = (state: State): Offer[] => state[NameSpace.Offer].favorites;
export const getIsFavoritesLoaded = (state: State): boolean => state[NameSpace.Offer].isFavoritesLoaded;

