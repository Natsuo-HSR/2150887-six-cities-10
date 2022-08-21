import { mockPlaces } from '../mocks/places';
import { City, Place } from '../types/types';

export const filterPlaces = (city: City): Place[] => (mockPlaces.filter((place) => place.city === city.title));
