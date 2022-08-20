import { AppSection, Place } from '../../types/types';
import { PlaceCard } from '../place-card/place-card';

type PlaceCardListProps = {
  section: AppSection;
  offers: Place[];
  onMouseOver?: (place: Place) => void;
}

export const PlaceCardList = ({ offers, section, onMouseOver }: PlaceCardListProps): JSX.Element => {
  // prepare styles
  const sectionStyle = getSectionStyle(section);

  return (
    <div className={sectionStyle}>
      { offers.map((offer) => <PlaceCard section={section} key={offer.id} place={offer} onMouseOver={onMouseOver ? onMouseOver : undefined} />) }
    </div>
  );
};

const getSectionStyle = (section: AppSection): string | undefined => {
  let sectionStyle;
  switch(section) {
    case AppSection.Main:
      sectionStyle = 'cities__places-list places__list tabs__content';
      break;
    case AppSection.Favorites:
      sectionStyle = 'favorites__list';
      break;
    case AppSection.Nearest:
      sectionStyle = 'near-places__list places__list';
      break;
  }
  return sectionStyle;
};
