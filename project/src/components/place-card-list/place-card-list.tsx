import { CardSection, Place } from '../../types/types';
import { PlaceCard } from '../place-card/place-card';

type PlaceCardListProps = {
  section: CardSection;
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

const getSectionStyle = (section: CardSection): string => {
  let sectionStyle;
  switch(section) {
    case CardSection.Main:
      sectionStyle = 'cities__places-list places__list tabs__content';
      break;
    case CardSection.Favorites:
      sectionStyle = 'favorites__list';
      break;
    case CardSection.Nearest:
      sectionStyle = 'near-places__list places__list';
      break;
  }
  return sectionStyle;
};
