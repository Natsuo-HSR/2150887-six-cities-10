import { useEffect, useRef } from 'react';
import L, { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { AppSection } from '../../constants/sections';

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedIconOrange = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


type MapProps = {
  section: AppSection;
  offers: Offer[];
  selectedOffer?: Offer | null;
};

export const Map = ({ section, offers, selectedOffer }: MapProps): JSX.Element => {
  const city = useAppSelector((state) => state.city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        });

        marker.setIcon(
          selectedOffer !== null && place.id === selectedOffer?.id
            ? selectedIconOrange
            : defaultIcon
        );

        marker
          .setIcon(
            selectedOffer !== null && place.id === selectedOffer?.id
              ? selectedIconOrange
              : defaultIcon
          )
          .addTo(map);
      });
      return () => {
        map.eachLayer((l) => l instanceof L.Marker ? map.removeLayer(l) : '');
      };
    }
  }, [map, offers, selectedOffer]);

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
