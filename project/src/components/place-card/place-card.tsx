import { Link } from 'react-router-dom';
import { AppSection, Place } from '../../types/types';

type PlaceCardProps = {
  section: AppSection;
  place: Place;
  onMouseOver?: (place: Place) => void;
}

export const PlaceCard = ({
  section,
  place,
  onMouseOver,
}: PlaceCardProps): JSX.Element => {
  const {id, mark, imageSource, bookmarked, price, rating, description, type} = place;

  // prepare styles
  const imageSizes = getImageSizes(section);
  const sectionStyle = getSectionStyle(section);

  return (
    <article className={`${sectionStyle}__card place-card`} onMouseOver={onMouseOver ? () => onMouseOver(place) : undefined}>
      {
        mark ?
          <div className="place-card__mark">
            <span>{mark}</span>
          </div>
          :
          null
      }
      <div className={`${sectionStyle}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={imageSource} {...imageSizes} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${bookmarked ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const getSectionStyle = (section: AppSection): string => {
  let sectionStyles = '';
  switch(section) {
    case AppSection.Main:
      sectionStyles = 'cities';
      break;
    case AppSection.Favorites:
      sectionStyles = 'favorites';
      break;
    case AppSection.Nearest:
      sectionStyles = 'near-places';
      break;
  }
  return sectionStyles;
};

const getImageSizes = (section: AppSection) => {
  let imageSizes;
  switch(section) {
    case AppSection.Main:
      imageSizes = {
        width: '260',
        height: '200',
      };
      break;
    case AppSection.Favorites:
      imageSizes = {
        width: '150',
        height: '110',
      };
      break;
    case AppSection.Nearest:
      imageSizes = {
        width: '260',
        height: '200',
      };
      break;
  }
  return imageSizes;
};
