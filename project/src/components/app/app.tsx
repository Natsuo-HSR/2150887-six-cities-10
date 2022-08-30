import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-fount-page/not-found-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { AppRoutes } from '../../constants/routes';
import { ProtectedRoute } from '../protected-route/protected-route';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { isCheckedAuth } from '../../utils/functions';
import { Spinner } from '../spinner/spinner';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';

export const App = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Index}
          element={<MainPage />}
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <ProtectedRoute >
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
};
