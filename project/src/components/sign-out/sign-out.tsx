import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { getUserInfo } from '../../services/user-info';
import { logout } from '../../store/api-actions';
import { getFavorites } from '../../store/offer-process/offer-selectors';

export const SignOut = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {email, avatarUrl} = getUserInfo();

  const favorites = useAppSelector(getFavorites);

  const handleSignOutClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#todo">
          <img className="header__avatar-wrapper user__avatar-wrapper" src={avatarUrl} alt="no image"></img>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </a>
      </li>
      <li className="header__nav-item">
        <Link
          to={AppRoutes.Index}
          onClick={(event) => handleSignOutClick(event)}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
};
