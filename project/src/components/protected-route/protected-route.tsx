import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthorized: boolean;
  children: JSX.Element
}

export const ProtectedRoute = ({ isAuthorized, children }: ProtectedRouteProps): JSX.Element => (
  isAuthorized ? children : <Navigate to='/login' />
);
