import { Favorite } from '../components/favorite-list/favorite-list';
import { Place } from './../components/place-card/place-card';

export const mockOffers: Place[] = [
  // main
  {
    id: 1,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 3,
    imageSource: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    mark: 'Discount',
    imageSource: 'img/apartment-03.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  // favorites
  {
    id: 5,
    mark: 'Premium',
    imageSource: 'img/apartment-small-03.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 6,
    imageSource: 'img/room-small.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 7,
    imageSource: 'img/apartment-small-04.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'White castle',
    type: 'Apartment'
  },
  // nearest
  {
    id: 8,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 9,
    imageSource: 'img/apartment-02.jpg',
    bookmarked: true,
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 10,
    mark: 'Premium',
    imageSource: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
];

export const favorites: Favorite[] = [
  {
    id: 1,
    city: 'Amsterdam',
    offers: [
      mockOffers[4],
      mockOffers[5]
    ]
  },
  {
    id: 2,
    city: 'Cologne',
    offers: [
      mockOffers[6]
    ]
  }
];
