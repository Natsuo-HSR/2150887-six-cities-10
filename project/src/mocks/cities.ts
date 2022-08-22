import { City } from '../types/types';

export const paris: City = {
  id: 1,
  title: 'Paris',
  latitude: 48.8534,
  longitude: 2.3488,
  zoom: 12
};

export const cologne: City = {
  id: 2,
  title: 'Cologne',
  latitude: 50.9333,
  longitude: 6.95,
  zoom: 12
};

export const brussels: City = {
  id: 3,
  title: 'Brussels',
  latitude: 50.8504,
  longitude: 4.34878,
  zoom: 12
};

export const amsterdam: City = {
  id: 4,
  title: 'Amsterdam',
  latitude: 52.374,
  longitude: 4.88969,
  zoom: 12
};

export const hamburg: City = {
  id: 5,
  title: 'Hamburg',
  latitude: 53.5753,
  longitude: 10.0153,
  zoom: 12
};

export const dusselgorf: City = {
  id: 6,
  title: 'Dusselgorf',
  latitude: 51.2217,
  longitude: 6.77616,
  zoom: 12
};

export const mockCities: City[] = [
  paris,
  cologne,
  brussels,
  amsterdam,
  hamburg,
  dusselgorf
];
