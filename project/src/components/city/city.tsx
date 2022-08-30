import { useAppDispatch } from '../../hooks/useAppDispatch';
import { filterOffersByCity } from '../../store/actions';
import { fetchOffers } from '../../store/api-actions';
import { City as CityType } from '../../types/types';

type CityProps = {
  city: CityType;
  isActive: boolean;
};

export const City = ({ city, isActive }: CityProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityClick = (clickedCity: CityType) => {
    dispatch(fetchOffers());
    dispatch(filterOffersByCity(clickedCity));
  };

  return (
    <li className="locations__item" onClick={() => handleCityClick(city)}>
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#todo">
        <span>{city.name}</span>
      </a>
    </li>
  );
};
