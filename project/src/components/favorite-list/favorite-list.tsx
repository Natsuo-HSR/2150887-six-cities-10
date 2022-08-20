import { useState } from 'react';
import { AppSection, Favorite, Place } from '../../types/types';
import { PlaceCard } from '../place-card/place-card';

type FavoriteListProps = {
  favorites: Favorite[]
}

export const FavoriteList = ({ favorites }: FavoriteListProps): JSX.Element => {
  const [, setActiveCard] = useState<null | Place>(null);

  const makeCardActive = (offer: Place) => setActiveCard(offer);

  return (
    <ul className="favorites__list">
      {favorites.map((favorite) => (
        <li className="favorites__locations-items" key={favorite.id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>{favorite.city}</span>
              </a>
            </div>
          </div>

          <div className="favorites__places">
            {favorite.offers.map((offer) => <PlaceCard section={AppSection.Favorites} key={offer.id} place={offer} onMouseOver={makeCardActive} />)}
          </div>
        </li>
      ))}
    </ul>
  );
};
