import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/api';
import { useAppSelector } from '../../hooks/useAppDispatch';

type ProtectedRouteProps = {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus !== AuthorizationStatus.Auth ? <Navigate to='/login' /> : children;
};
