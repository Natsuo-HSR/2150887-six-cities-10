import { SortOrder } from './../types/types';
import { mockOffers } from '../mocks/offers';
import { City, Offer, SortType } from '../types/types';

export const getOffers = (city: City, sortType: SortType): Offer[] => {
  const filteredOffers = mockOffers.filter((place) => place.city === city.title);
  return sortOffers(filteredOffers, sortType);
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
