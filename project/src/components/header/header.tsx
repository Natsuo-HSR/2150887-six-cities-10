import { AuthorizationStatus } from '../../constants/api';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';
import { SignIn } from '../sign-in/sign-in';
import { SignOut } from '../sign-out/sign-out';

export const Header = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized ? <SignOut /> : <SignIn />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
