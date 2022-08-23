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
  mark?: string;
  imageSource: string;
  bookmarked?: boolean;
  price: number;
  rating: number;
  description: string;
  type: string;
  city: string;
  location: MapPoint;
  reviews: Review[];
}

export type Favorite = {
  id: number,
  city: string,
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
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type MapPoint = {
  title: string,
  latitude: number;
  longitude: number;
  zoom: number;
}
