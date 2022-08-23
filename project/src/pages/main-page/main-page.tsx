import { useState } from 'react';
import { Cities } from '../../components/cities/cities';
import { Header } from '../../components/header/header';
import { Map } from '../../components/map/map';
import { PlaceCardList } from '../../components/place-card-list/place-card-list';
import { PlacesSorting } from '../../components/places-sorting/places-sorting';
import { cities } from '../../constants/cities';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { options } from '../../mocks/sort-options';
import { AppSection, Place } from '../../types/types';

export const MainPage = (): JSX.Element => {
  const [selectedCard, setSelectedCard] = useState<null | Place>(null);
  const selectCard = (offer: Place) => setSelectedCard(offer);

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Cities cities={cities} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.title}</b>
              <PlacesSorting options={options} />
              <PlaceCardList section={AppSection.Main} onMouseOver={selectCard} />
            </section>
            <div className="cities__right-section">
              <Map section={AppSection.Main} selectedPlace={selectedCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
