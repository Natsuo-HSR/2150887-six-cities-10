import { Review } from '../types/types';

export const generalReviews: Review[] = [
  {
    id: 1,
    userName: 'Max',
    rating: 2,
    text: 'Old furniture',
    dateTime: '2019-04-24',
    formattedDate: 'April 2019'
  },
  {
    id: 2,
    userName: 'Stewe',
    rating: 1,
    text: 'Too noisy',
    dateTime: '2019-06-01',
    formattedDate: 'June 2019'
  },
  {
    id: 3,
    userName: 'Mike',
    rating: 0,
    text: 'No comments...',
    dateTime: '2019-07-07',
    formattedDate: 'July 2019'
  },
  {
    id: 4,
    userName: 'Chase',
    rating: 5,
    text: 'Excellent',
    dateTime: '2019-04-24',
    formattedDate: 'April 2019'
  },
  {
    id: 5,
    userName: 'Eric',
    rating: 5,
    text: 'Wonderfull place',
    dateTime: '2019-05-24',
    formattedDate: 'May 2019'
  },
];

export const detailedReviews: Review[] = [
  {
    id: 1,
    userName: 'Max',
    rating: 4,
    text: 'The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown',
    dateTime: '2019-04-22',
    formattedDate: 'April 2019'
  },
  {
    id: 2,
    userName: 'Pete',
    rating: 5,
    text: 'This is the perfect hotel for a weekend getaway! It was great. Service top notch as always. Bed comfort can not be beat.',
    dateTime: '2019-04-23',
    formattedDate: 'April 2019'
  },
];

export const shortReviews: Review[] = [
  {
    id: 1,
    userName: 'Tony',
    rating: 4,
    text: 'Not bad, not great',
    dateTime: '2019-04-24',
    formattedDate: 'April 2019'
  },
  {
    id: 1,
    userName: 'Lara',
    rating: 4,
    text: 'Just fine',
    dateTime: '2019-05-24',
    formattedDate: 'May 2019'
  }
];

export const defaultReview: Review[] = [
  {
    id: 1,
    userName: 'Max',
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    dateTime: '2019-04-24',
    formattedDate: 'April 2019'
  }
];
