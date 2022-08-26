import { City } from '../types/types';

export const paris: City = {
  name: 'Paris',
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 12
  }
};

export const cologne: City = {
  name: 'Cologne',
  location: {
    latitude: 50.9333,
    longitude: 6.95,
    zoom: 12
  }
};

export const brussels: City = {
  name: 'Brussels',
  location: {
    latitude: 50.8504,
    longitude: 4.34878,
    zoom: 12
  }
};

export const amsterdam: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 12
  }
};

export const hamburg: City = {
  name: 'Hamburg',
  location: {
    latitude: 53.5753,
    longitude: 10.0153,
    zoom: 12
  }
};

export const dusselgorf: City = {
  name: 'Dusseldorf',
  location: {
    latitude: 51.2217,
    longitude: 6.77616,
    zoom: 12
  }
};

export const cities: City[] = [
  paris,
  cologne,
  brussels,
  amsterdam,
  hamburg,
  dusselgorf
];
