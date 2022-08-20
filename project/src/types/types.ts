export enum AppSection {
  Main = 'cities',
  Favorites = 'favorites',
  Nearest = 'near',
  Property = 'property',
}

export type Place = {
  id: number;
  mark?: string;
  imageSource: string;
  bookmarked?: boolean;
  price: number;
  rating: number;
  description: string;
  type: string;
  location: MapPoint;
  reviews: Review[];
}

export type Favorite = {
  id: number,
  city: string,
  offers: Place[];
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

export type MapProps = {
  city: City;
  places: Place[];
  selectedPlace?: Place | null;
};
