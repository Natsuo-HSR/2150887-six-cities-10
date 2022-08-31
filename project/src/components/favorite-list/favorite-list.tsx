import { useState } from 'react';
import { AppSection } from '../../constants/sections';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { getFavorites } from '../../store/offer-process/offer-selectors';
import { Offer } from '../../types/types';
import { OfferCard } from '../offer-card/offer-card';

export const FavoriteList = (): JSX.Element => {
  const favorites = useAppSelector(getFavorites);
  const [, setActiveCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setActiveCard(offer);

  return (
    <ul className="favorites__list">
      {
        favorites.length > 0 ?
          favorites.map((favorite) => (
            <li className="favorites__locations-items" key={favorite.id}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#todo">
                    <span>{favorite.city.name}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                <OfferCard section={AppSection.Favorites} key={favorite.id} offer={favorite} onMouseOver={handleCardMouseOver} />)
              </div>
            </li>
          ))
          :
          <h2 style={{textAlign: 'center'}}>Здесь пока пусто</h2>
      }
    </ul>
  );
};
