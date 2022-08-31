import { useEffect, useState } from 'react';
import { Cities } from '../../components/cities/cities';
import { MemoizedHeader } from '../../components/header/header';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { Map } from '../../components/map/map';
import { OfferCardList } from '../../components/offer-card-list/offer-card-list';
import { MemoizedOffersSorting } from '../../components/offers-sorting/offers-sorting';
import { Spinner } from '../../components/spinner/spinner';
import { cities } from '../../constants/cities';
import { AppSection } from '../../constants/sections';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { options } from '../../mocks/sort-options';
import { fetchFavoriteOffers, fetchOffers } from '../../store/api-actions';
import { setIsNeedToReload } from '../../store/offer-process/offer-process';
import { getCity, getIsNeedToReload, getIsOffersLoaded, getOffers } from '../../store/offer-process/offer-selectors';
import { Offer } from '../../types/types';

export const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [selectedCard, setSelectedCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setSelectedCard(offer);

  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const isOffersLoaded = useAppSelector(getIsOffersLoaded);

  const isNeedToReload = useAppSelector(getIsNeedToReload);

  useEffect(() => {
    if (isNeedToReload) {
      dispatch(fetchOffers());
      dispatch(fetchFavoriteOffers());
      dispatch(setIsNeedToReload(false));
    }
  }, [isNeedToReload]);

  return offers.length > 0 ?
    <div className="page page--gray page--main">
      <MemoizedHeader />
      <main className="page__main page__main--index">
        <Cities cities={cities} />
        {
          isOffersLoaded ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {city.name}</b>
                  <MemoizedOffersSorting options={options} />
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
    :
    <MainEmpty />;
};
