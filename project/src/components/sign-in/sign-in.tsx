import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';

export const SignIn = (): JSX.Element => (
  <li className="header__nav-item">
    <Link to={AppRoutes.Login} >
      <span className="header__signout">Sign in</span>
    </Link>
  </li>
);
