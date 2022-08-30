import { SortOrder, Review } from './../types/types';
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
    default:
      return offers;
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

export const sortReviews = (reviews: Review[], sortType: SortType) => {
  switch(sortType) {
    case SortType.DateNewToLow:
      return sortByDate(reviews, SortOrder.HighToLow);
    default:
      return reviews;
  }
};

const sortByDate = (reviews: Review[], order: SortOrder) => {
  if (order > 0) {
    return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  else {
    return reviews.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
};
