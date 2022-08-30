import { useState } from 'react';
import { Cities } from '../../components/cities/cities';
import { Header } from '../../components/header/header';
import { Map } from '../../components/map/map';
import { OfferCardList } from '../../components/offer-card-list/offer-card-list';
import { OffersSorting } from '../../components/offers-sorting/offers-sorting';
import { Spinner } from '../../components/spinner/spinner';
import { cities } from '../../constants/cities';
import { AppSection } from '../../constants/sections';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { options } from '../../mocks/sort-options';
import { Offer } from '../../types/types';

export const MainPage = (): JSX.Element => {
  const [selectedCard, setSelectedCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setSelectedCard(offer);

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Cities cities={cities} />
        {
          isOffersLoaded ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {city.name}</b>
                  <OffersSorting options={options} />
                  <OfferCardList section={AppSection.Main} offers={offers} onMouseOver={handleCardMouseOver} />
                </section>
                <div className="cities__right-section">
                  <Map section={AppSection.Main} offers={offers} selectedOffer={selectedCard} />
                </div>
              </div>
            </div>
            :
            <Spinner />
        }
      </main>
    </div>
  );
};
