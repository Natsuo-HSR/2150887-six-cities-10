import { useEffect } from 'react';
import { NotFoundPage } from '../not-fount-page/not-found-page';
import { ReviewSection } from '../../components/review-section/review-section';
import { Map } from '../../components/map/map';
import { MemoizedHeader } from '../../components/header/header';
import { OfferCardList } from '../../components/offer-card-list/offer-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { Spinner } from '../../components/spinner/spinner';
import { useParams } from 'react-router-dom';
import { fetchOfferById, fetchNearbyOffers, fetchReviews, fetchFavoriteOffers } from '../../store/api-actions';
import { AppSection } from '../../constants/sections';
import { getCurrentOffer, getIsCurrentOfferLoaded, getIsNearbyOffersLoaded, getIsNeedToReload, getNearbyOffers } from '../../store/offer-process/offer-selectors';
import { BookmarkButton } from '../../components/bookmark-button/bookmark-button';
import { setIsNeedToReload } from '../../store/offer-process/offer-process';


export const PropertyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const urlParams = useParams();

  useEffect(() => {
    const offerId = Number(urlParams.id);
    dispatch(fetchOfferById(offerId));
    dispatch(fetchReviews(offerId));
    dispatch(fetchNearbyOffers(offerId));
  }, [urlParams.id]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const isCurrentOfferLoaded = useAppSelector(getIsCurrentOfferLoaded);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isNearbyOffersLoaded = useAppSelector(getIsNearbyOffersLoaded);
  const isNeedToReload = useAppSelector(getIsNeedToReload);

  useEffect(() => {
    if (isNeedToReload) {
      const offerId = Number(urlParams.id);
      dispatch(fetchOfferById(offerId));
      dispatch(fetchReviews(offerId));
      dispatch(fetchNearbyOffers(offerId));
      dispatch(fetchFavoriteOffers());
      dispatch(setIsNeedToReload(false));
    }
  }, [isNeedToReload]);

  if (!isCurrentOfferLoaded) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const { isPremium, title, images, price, rating, description, type, maxAdults, bedrooms, goods, id, isFavorite, host } = currentOffer;

  const slicedImages = images.slice(0, 6);

  return (
    <>
      <MemoizedHeader />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                slicedImages.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  :
                  null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton offerId={id} isFavorite={isFavorite} section={AppSection.Property} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : '' } user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro ? <span className="property__user-status">Pro</span> : undefined}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewSection />
            </div>
          </div>
          {
            isNearbyOffersLoaded ? <Map section={AppSection.Property} offers={[currentOffer, ...nearbyOffers]} selectedOffer={currentOffer} /> : <Spinner />
          }
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {
              isNearbyOffersLoaded ? <OfferCardList section={AppSection.Nearby} offers={nearbyOffers} /> : <Spinner />
            }
          </section>
        </div>
      </main>
    </>
  );
};
