import { Place, Favorite } from '../types/types';
import { defaultReview, detailedReviews } from './reviews';

export const parisPlaces: Place[] = [
  {
    id: 1,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Apartment',
    city: 'Paris',
    location: {
      title: 'Apartment 1',
      latitude: 48.8434,
      longitude: 2.3688,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 2,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Paris',
    location: {
      title: 'Apartment 2',
      latitude: 48.7934,
      longitude: 2.3288,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const colognePlaces: Place[] = [
  {
    id: 1,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    city: 'Cologne',
    location: {
      title: 'Apartment 1',
      latitude: 50.9333,
      longitude: 6.99,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 2,
    imageSource: 'img/apartment-03.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Cologne',
    location: {
      title: 'Apartment 2',
      latitude: 50.9633,
      longitude: 6.899,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const brusselsPlaces: Place[] = [
  {
    id: 1,
    imageSource: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    city: 'Brussels',
    location: {
      title: 'Apartment 1',
      latitude: 50.9004,
      longitude: 4.35878,
      zoom: 15
    },
    reviews: detailedReviews
  },
  {
    id: 2,
    imageSource: 'img/apartment-01.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Brussels',
    location: {
      title: 'Apartment 2',
      latitude: 50.8304,
      longitude: 4.30978,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const amsterdamPlaces: Place[] = [
  {
    id: 1,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    city: 'Amsterdam',
    location: {
      title: 'Apartment 1',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 2,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Amsterdam',
    location: {
      title: 'Apartment 2',
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 3,
    imageSource: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    city: 'Amsterdam',
    location: {
      title: 'Apartment 3',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 15
    },
    reviews: defaultReview
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
    city: 'Amsterdam',
    location: {
      title: 'Apartment 4',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const hamburgPlaces: Place[] = [
  {
    id: 1,
    mark: 'Discount',
    imageSource: 'img/apartment-03.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    city: 'Hamburg',
    location: {
      title: 'Apartment 4',
      latitude: 53.5499,
      longitude: 10.0002,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 2,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    city: 'Hamburg',
    location: {
      title: 'Apartment 1',
      latitude: 53.5353,
      longitude: 10.0153,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 3,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Hamburg',
    location: {
      title: 'Apartment 2',
      latitude: 53.6053,
      longitude: 10.0753,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const dusselgorfPlaces: Place[] = [
  {
    id: 1,
    imageSource: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    city: 'Dusselgorf',
    location: {
      title: 'Apartment 3',
      latitude: 51.2517,
      longitude: 6.73616,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 2,
    mark: 'Discount',
    imageSource: 'img/apartment-03.jpg',
    bookmarked: true,
    price: 180,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    city: 'Dusselgorf',
    location: {
      title: 'Apartment 4',
      latitude: 51.2617,
      longitude: 6.76616,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 3,
    mark: 'Premium',
    imageSource: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    city: 'Dusselgorf',
    location: {
      title: 'Apartment 1',
      latitude: 51.2717,
      longitude: 6.75616,
      zoom: 15
    },
    reviews: defaultReview
  },
  {
    id: 4,
    imageSource: 'img/room.jpg',
    bookmarked: true,
    price: 80,
    rating: 4,
    description: 'Wood and stone place',
    type: 'Private room',
    city: 'Dusselgorf',
    location: {
      title: 'Apartment 2',
      latitude: 51.2017,
      longitude: 6.73616,
      zoom: 15
    },
    reviews: defaultReview
  },
];

export const mockPlaces: Place[] = [
  ...parisPlaces,
  ...colognePlaces,
  ...brusselsPlaces,
  ...amsterdamPlaces,
  ...hamburgPlaces,
  ...dusselgorfPlaces
];

// export const mockPlaces: Place[] = [
//   // main
//   {
//     id: 1,
//     mark: 'Premium',
//     imageSource: 'img/apartment-01.jpg',
//     price: 120,
//     rating: 2,
//     description: 'Beautiful & luxurious apartment at great location',
//     type: 'Apartment',
//     city: 'Dusselgorf',
//     location: {
//       title: 'Apartment 1',
//       latitude: 52.3909553943508,
//       longitude: 4.85309666406198,
//       zoom: 15
//     },
//     reviews: generalReviews
//   },
//   {
//     id: 2,
//     imageSource: 'img/room.jpg',
//     bookmarked: true,
//     price: 80,
//     rating: 4,
//     description: 'Wood and stone place',
//     type: 'Private room',
//     location: {
//       title: 'Apartment 2',
//       latitude: 52.369553943508,
//       longitude: 4.85309666406198,
//       zoom: 15
//     },
//     reviews: generalReviews
//   },
//   {
//     id: 3,
//     imageSource: 'img/apartment-02.jpg',
//     price: 132,
//     rating: 4,
//     description: 'Canal View Prinsengracht',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 3',
//       latitude: 52.3909553943508,
//       longitude: 4.929309666406198,
//       zoom: 15
//     },
//     reviews: detailedReviews
//   },
//   {
//     id: 4,
//     mark: 'Discount',
//     imageSource: 'img/apartment-03.jpg',
//     bookmarked: true,
//     price: 180,
//     rating: 5,
//     description: 'Nice, cozy, warm big bed apartment',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 4',
//       latitude: 52.3809553943508,
//       longitude: 4.939309666406198,
//       zoom: 15
//     },
//     reviews: shortReviews
//   },
//   // favorites
//   {
//     id: 5,
//     mark: 'Premium',
//     imageSource: 'img/apartment-small-03.jpg',
//     bookmarked: true,
//     price: 180,
//     rating: 5,
//     description: 'Nice, cozy, warm big bed apartment',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 5',
//       latitude: 52.3809553943608,
//       longitude: 4.939309666406198,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
//   {
//     id: 6,
//     imageSource: 'img/room-small.jpg',
//     bookmarked: true,
//     price: 80,
//     rating: 4,
//     description: 'Wood and stone place',
//     type: 'Private room',
//     location: {
//       title: 'Apartment 6',
//       latitude: 52.3809553943708,
//       longitude: 4.939309666406198,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
//   {
//     id: 7,
//     imageSource: 'img/apartment-small-04.jpg',
//     bookmarked: true,
//     price: 180,
//     rating: 5,
//     description: 'White castle',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 7',
//       latitude: 52.3809553943808,
//       longitude: 4.939309666406198,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
//   // nearest
//   {
//     id: 8,
//     imageSource: 'img/room.jpg',
//     bookmarked: true,
//     price: 80,
//     rating: 4,
//     description: 'Wood and stone place',
//     type: 'Private room',
//     location: {
//       title: 'Apartment 8',
//       latitude: 35.6125002,
//       longitude: 139.678236,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
//   {
//     id: 9,
//     imageSource: 'img/apartment-02.jpg',
//     bookmarked: true,
//     price: 132,
//     rating: 4,
//     description: 'Canal View Prinsengracht',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 9',
//       latitude: 35.6655645,
//       longitude: 139.645524,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
//   {
//     id: 10,
//     mark: 'Premium',
//     imageSource: 'img/apartment-03.jpg',
//     price: 180,
//     rating: 5,
//     description: 'Nice, cozy, warm big bed apartment',
//     type: 'Apartment',
//     location: {
//       title: 'Apartment 10',
//       latitude: 35.6965261,
//       longitude: 139.623123,
//       zoom: 15
//     },
//     reviews: defaultReview
//   },
// ];


// export const cityPlaces: CityPlaces[] = [
//   {
//     city: paris,
//     places: parisPlaces
//   },
//   {
//     city: cologne,
//     places: colognePlaces
//   },
//   {
//     city: brussels,
//     places: brusselsPlaces
//   },
//   {
//     city: amsterdam,
//     places: amsterdamPlaces
//   },
//   {
//     city: hamburg,
//     places: hamburgPlaces
//   },
//   {
//     city: dusselgorf,
//     places: dusselgorfPlaces
//   }
// ];

export const favorites: Favorite[] = [
  {
    id: 1,
    city: 'Amsterdam',
    offers: [
      mockPlaces[4],
      mockPlaces[5]
    ]
  },
  {
    id: 2,
    city: 'Cologne',
    offers: [
      mockPlaces[6]
    ]
  }
];
