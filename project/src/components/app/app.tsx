import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-fount-page/not-found-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { AppRoutes } from '../../constants/routes';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Place } from '../place-card/place-card';
import { Favorite } from '../favorite-list/favorite-list';

type AppProps = {
  offers: Place[];
  favorites: Favorite[];
}

export const App = ({offers, favorites} : AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoutes.Index}
        element={<MainPage offers={offers} />}
      />
      <Route
        path={AppRoutes.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoutes.Favorites}
        element={
          <ProtectedRoute isAuthorized>
            <FavoritesPage favorites={favorites} />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutes.Property}
        element={<PropertyPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);
