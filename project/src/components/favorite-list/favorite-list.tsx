import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { AppSection, Offer } from '../../types/types';
import { OfferCard } from '../offer-card/offer-card';

export const FavoriteList = (): JSX.Element => {
  const favorites = useAppSelector((state) => state.favorites);
  const [, setActiveCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setActiveCard(offer);

  return (
    <ul className="favorites__list">
      {favorites.map((favorite) => (
        <li className="favorites__locations-items" key={favorite.cityName}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>{favorite.cityName}</span>
              </a>
            </div>
          </div>

          <div className="favorites__places">
            {favorite.offers.map((offer) => <OfferCard section={AppSection.Favorites} key={offer.id} offer={offer} onMouseOver={handleCardMouseOver} />)}
          </div>
        </li>
      ))}
    </ul>
  );
};
