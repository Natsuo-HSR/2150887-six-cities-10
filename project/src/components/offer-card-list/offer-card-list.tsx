import { AppSection } from '../../constants/sections';
import { Offer } from '../../types/types';
import { OfferCard } from '../offer-card/offer-card';

type OfferCardListProps = {
  section: AppSection;
  offers: Offer[],
  onMouseOver?: (place: Offer) => void;
}

export const OfferCardList = ({ section, offers, onMouseOver }: OfferCardListProps): JSX.Element => {
  // prepare styles
  const sectionStyle = getSectionStyle(section);

  return (
    <div className={sectionStyle}>
      { offers.map((offer) => <OfferCard section={section} key={offer.id} offer={offer} onMouseOver={onMouseOver ? onMouseOver : undefined} />) }
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
    case AppSection.Nearby:
      sectionStyle = 'near-places__list places__list';
      break;
  }
  return sectionStyle;
};
