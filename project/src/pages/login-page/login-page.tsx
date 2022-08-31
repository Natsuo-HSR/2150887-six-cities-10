import { FormEvent, useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/api';
import { cities } from '../../constants/cities';
import { AppRoutes } from '../../constants/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { fetchOffers, login } from '../../store/api-actions';
import { setCity } from '../../store/offer-process/offer-process';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';
import { AuthData } from '../../types/types';

export const LoginPage = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(login(authData));
  };

  const handleCityClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(setCity(randomCity));
    dispatch(fetchOffers());
    navigate(AppRoutes.Index);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trim();
  };

  if (isAuthorized) {
    return <Navigate to={AppRoutes.Index} />;
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" onSubmit={handleSubmit} action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input ref={passwordRef} onChange={(event) => handlePasswordInputChange(event)} className="login__input form__input" type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoutes.Index} onClick={(event) => handleCityClick(event)}>
              <span>{randomCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
