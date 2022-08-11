import { useState } from 'react';
import { PlaceCard, Place, CardSection } from '../place-card/place-card';

type PlaceCardListProps = {
  section: CardSection;
  offers: Place[];
}

export const PlaceCardList = ({ offers, section }: PlaceCardListProps): JSX.Element => {
  const [, setActiveCard] = useState<null | Place>(null);
  const makeCardActive = (offer: Place) => setActiveCard(offer);

  // prepare styles
  const sectionStyle = getSectionStyle(section);

  return (
    <div className={sectionStyle}>
      { offers.map((offer) => <PlaceCard section={section} key={offer.id} place={offer} onMouseOver={makeCardActive} />) }
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
