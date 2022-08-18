import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City, Place } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_SELECTED } from '../../constants/markers';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  places: Place[];
  selectedPlace: Place | null;
};

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedIcon = new Icon({
  iconUrl: URL_MARKER_SELECTED,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map = ({ city, places, selectedPlace }: MapProps): JSX.Element => {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        });

        marker
          .setIcon(
            selectedPlace !== null && place.location.title === selectedPlace.location.title
              ? selectedIcon
              : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, places, selectedPlace]);

  return <section className='cities__map map' ref={mapRef}></section>;
};
