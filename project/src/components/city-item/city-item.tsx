import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCityAction } from '../../store/actions';
import { City } from '../../types/types';

type CityItemProps = {
  city: City;
  isActive: boolean;
};

export const CityItem = ({ city, isActive }: CityItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item" onClick={() => dispatch(setCityAction(city))}>
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#todo">
        <span>{city.title}</span>
      </a>
    </li>
  );
};
