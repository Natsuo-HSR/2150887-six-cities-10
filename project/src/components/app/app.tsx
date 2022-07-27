import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage, MainPageProps } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-fount-page/not-found-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { AppRoutes } from '../../constants/routes';
import { ProtectedRoute } from '../protected-route/protected-route';


export const App = ({placesNumber} : MainPageProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoutes.Index}
        element={<MainPage placesNumber={placesNumber} />}
      />
      <Route
        path={AppRoutes.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoutes.Favorites}
        element={
          <ProtectedRoute isAuthorized={false}>
            <FavoritesPage />
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
