export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export enum SortOrder {
  LowToHigh = -1,
  HighToLow = 1
}

export type Offer = {
  id: number;
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  bookmarked?: boolean;
}

export type Review = {
  id: number;
  rating: number;
  comment: string;
  date: string;
  user: Host;
}

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  id: number
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserInfo = {
  id: number;
  email: string;
  name: string;
  token: string;
  avatarUrl: string;
  isPro: boolean;
};
