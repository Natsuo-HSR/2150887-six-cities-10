export enum AppSection {
  Main = 'cities',
  Favorites = 'favorites',
  Nearest = 'near',
  Property = 'property',
}

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
  reviews?: Review[];
}

export type Favorite = {
  cityName: string,
  offers: Offer[];
}

export type Review = {
  id: number;
  userName: string;
  rating: number;
  text: string;
  dateTime: string;
  formattedDate: string;
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
  sPro: boolean;
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
