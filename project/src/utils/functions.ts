import { SortOrder } from './../types/types';
import { mockOffers } from '../mocks/offers';
import { City, Place, SortType } from '../types/types';

export const getOffers = (city: City, sortType: SortType): Place[] => {
  const filteredOffers = mockOffers.filter((place) => place.city === city.title);
  return sortOffers(filteredOffers, sortType);
};

const sortOffers = (offers: Place[], sortType: SortType): Place[] => {
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

const sortByPrice = (offers: Place[], order: SortOrder) => {
  if (order > 0) {
    return offers.sort((a, b) => b.price - a.price);
  }
  else {
    return offers.sort((a, b) => a.price - b.price);
  }
};
const sortByTopRating = (offers: Place[]) => offers.sort((a, b) => b.rating - a.rating);
