import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchOffers } from '../../store/api-actions';
import { setCity } from '../../store/offer-process/offer-process';
import { City as CityType } from '../../types/types';

type CityProps = {
  city: CityType;
  isActive: boolean;
};

export const City = ({ city, isActive }: CityProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityClick = (clickedCity: CityType) => {
    dispatch(setCity(clickedCity));
    dispatch(fetchOffers());
  };

  return (
    <li className="locations__item" onClick={() => handleCityClick(city)}>
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to="#">
        <span>{city.name}</span>
      </Link>
    </li>
  );
};
