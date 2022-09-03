import React, { FormEvent, useRef } from 'react';
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
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoutes.Index}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
            </div>
          </div>
        </header>
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
      </div>
    </>
  );
};
