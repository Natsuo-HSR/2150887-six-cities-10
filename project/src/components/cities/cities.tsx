import { useAppSelector } from '../../hooks/useAppDispatch';
import { City as CityType } from '../../types/types';
import { City } from '../city/city';

type CitiesProps = {
  cities: CityType[];
};

export const Cities = ({ cities }: CitiesProps): JSX.Element => {
  const choosedCity = useAppSelector((state) => state.city);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <City key={city.name} isActive={city.name === choosedCity.name} city={city} />)}
          </ul>
        </section>
      </div>
    </>
  );
};
