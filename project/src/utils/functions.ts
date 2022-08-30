import { SortOrder } from './../types/types';
import { City, Offer, SortType } from '../types/types';
import { AuthorizationStatus } from '../constants/api';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const findOfferById = (offers: Offer[], givenId: number): Offer | undefined => (
  offers.find(({id}) => id === givenId)
);

export const getOffers = (offers: Offer[], city: City, sortType: SortType): Offer[] => {
  const filteredOffers = offers.filter((place) => place.city.name === city.name);
  return sortOffers(filteredOffers, sortType);
};

export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`;
};

export const getMonthAndYear = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.toLocaleString('en-us', { month: 'long' })} ${dateObj.getFullYear()}`;
};

const sortOffers = (offers: Offer[], sortType: SortType): Offer[] => {
  switch (sortType) {
    case SortType.Popular:
      return offers;
    case SortType.PriceHighToLow:
      return sortByPrice(offers, SortOrder.HighToLow);
    case SortType.PriceLowToHigh:
      return sortByPrice(offers, SortOrder.LowToHigh);
    case SortType.TopRatedFirst:
      return sortByTopRating(offers);
  }
};

const sortByPrice = (offers: Offer[], order: SortOrder) => {
  if (order > 0) {
    return offers.sort((a, b) => b.price - a.price);
  }
  else {
    return offers.sort((a, b) => a.price - b.price);
  }
};
const sortByTopRating = (offers: Offer[]) => offers.sort((a, b) => b.rating - a.rating);
