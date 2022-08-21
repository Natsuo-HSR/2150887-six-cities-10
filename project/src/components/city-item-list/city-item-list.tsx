import { useAppSelector } from '../../hooks/useAppDispatch';
import { City } from '../../types/types';
import { CityItem } from '../city-item/city-item';

type CityItemListProps = {
  cities: City[];
};

export const CityItemList = ({ cities }: CityItemListProps): JSX.Element => {
  const choosedCity = useAppSelector((state) => state.city);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <CityItem key={city.latitude} isActive={city.title === choosedCity.title} city={city} />)}
          </ul>
        </section>
      </div>
    </>
  );
};
