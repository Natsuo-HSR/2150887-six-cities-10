import { Link } from 'react-router-dom';
import { AppSection } from '../../constants/sections';
import { Offer } from '../../types/types';
import { BookmarkButton } from '../bookmark-button/bookmark-button';

type OfferCardProps = {
  section: AppSection;
  offer: Offer;
  onMouseOver?: (place: Offer) => void;
}

export const OfferCard = ({
  section,
  offer,
  onMouseOver,
}: OfferCardProps): JSX.Element => {
  const {id, isPremium, previewImage, isFavorite, price, rating, title, type} = offer;

  // prepare styles
  const imageSizes = getImageSizes(section);
  const sectionStyle = getSectionStyle(section);

  return (
    <article className={`${sectionStyle}__card place-card`} onMouseOver={onMouseOver ? () => onMouseOver(offer) : undefined}>
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          :
          undefined
      }
      <div className={`${sectionStyle}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} {...imageSizes} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton offerId={offer.id} isFavorite={isFavorite} section={section} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const getSectionStyle = (section: AppSection): string => {
  switch(section) {
    case AppSection.Main:
      return 'cities';
    case AppSection.Favorites:
      return 'favorites';
    case AppSection.Nearby:
      return 'near-places';
    default:
      return 'cities';
  }
};

const getImageSizes = (section: AppSection) => {
  switch(section) {
    case AppSection.Main:
      return {
        width: '260',
        height: '200',
      };
    case AppSection.Favorites:
      return {
        width: '150',
        height: '110',
      };
    case AppSection.Nearby:
      return {
        width: '260',
        height: '200',
      };
  }
};
