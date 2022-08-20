import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { AppSection, MapProps } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_SELECTED } from '../../constants/markers';
import 'leaflet/dist/leaflet.css';

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

type MapOwnProps = MapProps & {
  section: AppSection;
}

export const Map = ({ section, city, places, selectedPlace }: MapOwnProps): JSX.Element => {
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
            selectedPlace !== null && place.location.title === selectedPlace?.location.title
              ? selectedIcon
              : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, places, selectedPlace]);

  let className, style;

  switch(section) {
    case AppSection.Main:
      className = 'cities__map map';
      break;
    case AppSection.Property:
      className = 'property__map map';
      style = {
        maxWidth: '60%',
        margin: '0 auto 50px auto',
      };
      break;
  }
  return <section className={className} style={style} ref={mapRef}></section>;
};
