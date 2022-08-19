import { badReviews, defaultReview, greatReviews, detailedReviews, shortReviews } from './reviews';
import { Favorite, Place } from '../types/types';

export const mockOffers: Place[] = [
  // main
  {
    id: 1,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 2,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    location: {
      title: 'Apartment 1',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 15
    },
    reviews: badReviews
  },
  {
    id: 2,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    location: {
      title: 'Apartment 2',
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 15
    },
    reviews: greatReviews
  },
  {
    id: 3,
    imageSource: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    location: {
      title: 'Apartment 3',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 15
    },
    reviews: detailedReviews
  },
  {
    id: 4,
    mark: 'Discount',
    imageSource: 'img/apartment-03.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    location: {
      title: 'Apartment 4',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 15
    },
    reviews: shortReviews
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
    type: 'Apartment',
    location: {
      title: 'Apartment 5',
      latitude: 52.3809553943608,
      longitude: 4.939309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 6,
    imageSource: 'img/room-small.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    location: {
      title: 'Apartment 6',
      latitude: 52.3809553943708,
      longitude: 4.939309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 7,
    imageSource: 'img/apartment-small-04.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'White castle',
    type: 'Apartment',
    location: {
      title: 'Apartment 7',
      latitude: 52.3809553943808,
      longitude: 4.939309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
  // nearest
  {
    id: 8,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    location: {
      title: 'Apartment 8',
      latitude: 35.6125002,
      longitude: 139.678236,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 9,
    imageSource: 'img/apartment-02.jpg',
    bookmarked: true,
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    location: {
      title: 'Apartment 9',
      latitude: 35.6655645,
      longitude: 139.645524,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 10,
    mark: 'Premium',
    imageSource: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    location: {
      title: 'Apartment 10',
      latitude: 35.6965261,
      longitude: 139.623123,
      zoom: 15
    },
    reviews: defaultReview
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
