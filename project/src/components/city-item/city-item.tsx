import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeCityAction, loadCityPlacesAction } from '../../store/actions';
import { City } from '../../types/types';

type CityItemProps = {
  city: City;
  isActive: boolean;
};

export const CityItem = ({ city, isActive }: CityItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const onCityChoosed = () => {
    dispatch(changeCityAction(city));
    dispatch(loadCityPlacesAction());
  };

  return (
    <li className="locations__item" onClick={onCityChoosed}>
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#todo">
        <span>{city.title}</span>
      </a>
    </li>
  );
};
