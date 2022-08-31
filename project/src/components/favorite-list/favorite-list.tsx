import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppSection } from '../../constants/sections';
import { Offer } from '../../types/types';
import { OfferCard } from '../offer-card/offer-card';

type FavoriteListProps = {
  cityName: string,
  offers: Offer[],
}

export const FavoriteList = ({ cityName, offers }: FavoriteListProps): JSX.Element => {
  const [, setActiveCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setActiveCard(offer);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <OfferCard section={AppSection.Favorites} key={offer.id} offer={offer} onMouseOver={handleCardMouseOver} />)}
      </div>
    </li>
  );
};
