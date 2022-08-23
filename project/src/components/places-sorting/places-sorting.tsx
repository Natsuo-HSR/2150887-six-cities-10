import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { setSortTypeAction } from '../../store/actions';
import { SortType } from '../../types/types';

type PlacesSoringType = {
  options: SortType[];
}

export const PlacesSorting = ({options}: PlacesSoringType): JSX.Element => {
  const [isOpened, setOpened] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  const onSortChange = (option: SortType) => {
    dispatch(setSortTypeAction(option));
    setOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpened(!isOpened)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : undefined}`}>
        {
          options.map((option) => (
            <li
              className={`places__option ${option === sortType ? 'places__option--active' : undefined}`}
              tabIndex={0}
              key={option}
              onClick={() => onSortChange(option)}
            >
              {option}
            </li>))
        }
      </ul>
    </form>
  );
};
