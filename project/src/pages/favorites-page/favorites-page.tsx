import { useEffect } from 'react';
import { FavoriteList } from '../../components/favorite-list/favorite-list';
import { MemoizedFooter } from '../../components/footer/footer';
import { MemoizedHeader } from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { getIsFavoritesLoaded } from '../../store/offer-process/offer-selectors';


export const FavoritesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffers);
  }, []);

  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  return (
    isFavoritesLoaded ?
      <>
        <MemoizedHeader />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList />
            </section>
          </div>
        </main>
        <MemoizedFooter />
      </>
      :
      <Spinner />
  );
};

