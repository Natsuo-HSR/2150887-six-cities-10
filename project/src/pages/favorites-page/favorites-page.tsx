import { useEffect } from 'react';
import { FavoriteList } from '../../components/favorite-list/favorite-list';
import { Footer } from '../../components/footer/footer';
import { MemoizedHeader } from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { setIsNeedToReload } from '../../store/offer-process/offer-process';
import { getFavorites, getIsFavoritesLoaded, getIsNeedToReload } from '../../store/offer-process/offer-selectors';


export const FavoritesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffers);
  }, []);

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  const isNeedToReload = useAppSelector(getIsNeedToReload);

  useEffect(() => {
    if (isNeedToReload) {
      dispatch(fetchFavoriteOffers());
      dispatch(setIsNeedToReload(false));
    }
  }, [isNeedToReload]);

  const citiesSet = new Set(favorites.map((fav) => fav.city.name));

  return (
    isFavoritesLoaded ?
      <>
        <MemoizedHeader />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Array.from(citiesSet).map((cityName) => <FavoriteList key={cityName} cityName={cityName} offers={favorites.filter((fav) => fav.city.name === cityName)} />)}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </>
      :
      <Spinner />
  );
};

