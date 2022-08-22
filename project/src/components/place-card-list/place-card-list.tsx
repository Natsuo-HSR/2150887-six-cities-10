import { useAppSelector } from '../../hooks/useAppDispatch';
import { AppSection, Place } from '../../types/types';
import { PlaceCard } from '../place-card/place-card';

type PlaceCardListProps = {
  section: AppSection;
  onMouseOver?: (place: Place) => void;
}

export const PlaceCardList = ({ section, onMouseOver }: PlaceCardListProps): JSX.Element => {
  // prepare styles
  const sectionStyle = getSectionStyle(section);

  const places = useAppSelector((state) => state.places);

  return (
    <div className={sectionStyle}>
      { places.map((place) => <PlaceCard section={section} key={place.id} place={place} onMouseOver={onMouseOver ? onMouseOver : undefined} />) }
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
