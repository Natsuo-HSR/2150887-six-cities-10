import { useAppSelector } from '../../hooks/useAppDispatch';
import { City } from '../../types/types';
import { CityItem } from '../city-item/city-item';

type CitiesProps = {
  cities: City[];
};

export const Cities = ({ cities }: CitiesProps): JSX.Element => {
  const choosedCity = useAppSelector((state) => state.city);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <CityItem key={city.id} isActive={city.title === choosedCity.title} city={city} />)}
          </ul>
        </section>
      </div>
    </>
  );
};
