import { Favorite, FavoriteList } from '../../components/favorite-list/favorite-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

type FavoritesPageProps = {
  favorites: Favorite[];
}

export const FavoritesPage = ({favorites}: FavoritesPageProps): JSX.Element => (
  <>
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList favorites={favorites} />
        </section>
      </div>
    </main>
    <Footer />
  </>
);
