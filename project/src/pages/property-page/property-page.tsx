import { useEffect, useState } from 'react';
import { NotFoundPage } from '../not-fount-page/not-found-page';
import { ReviewSection } from '../../components/review-section/review-section';
import { Offer } from '../../types/types';
import { Map } from '../../components/map/map';
import { Header } from '../../components/header/header';
import { OfferCardList } from '../../components/offer-card-list/offer-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { Spinner } from '../../components/spinner/spinner';
import { useParams } from 'react-router-dom';
import { fetchOfferById, fetchNearbyOffers, fetchReviews } from '../../store/api-actions';
import { AppSection } from '../../constants/sections';
import { getCurrentOffer, getIsCurrentOfferLoaded, getIsNearbyOffersLoaded, getNearbyOffers } from '../../store/offer-process/offer-selectors';


export const PropertyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [selectedCard, setSelectedCard] = useState<null | Offer>(null);
  const handleCardMouseOver = (offer: Offer) => setSelectedCard(offer);

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

  if (!isCurrentOfferLoaded) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const { isPremium, images, price, rating, description, type, maxAdults, bedrooms, goods } = currentOffer;

  const slicedImages = images.slice(0, 6);

  return (
    <>
      <Header />
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
                <h1 className="property__name">{description}</h1>
                <button className='property__bookmark-button button' type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewSection />
            </div>
          </div>
          {
            isNearbyOffersLoaded ? <Map section={AppSection.Property} offers={nearbyOffers} selectedOffer={selectedCard} /> : <Spinner />
          }
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {
              isNearbyOffersLoaded ? <OfferCardList section={AppSection.Nearby} offers={nearbyOffers} onMouseOver={handleCardMouseOver} /> : <Spinner />
            }
          </section>
        </div>
      </main>
    </>
  );
};
