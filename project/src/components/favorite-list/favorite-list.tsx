import { useState } from 'react';
import { PlaceCard, Place, CardSection } from '../place-card/place-card';

export type Favorite = {
  id: number,
  city: string,
  offers: Place[];
}

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
            {favorite.offers.map((offer) => <PlaceCard section={CardSection.Favorites} key={offer.id} place={offer} onMouseOver={makeCardActive} />)}
          </div>
        </li>
      ))}
    </ul>
  );
};
