import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { sortOffers } from '../../store/offer-process/offer-process';
import { getSortType } from '../../store/offer-process/offer-selectors';
import { SortType } from '../../types/types';

type OffersSoringType = {
  options: SortType[];
}

export const OffersSorting = ({options}: OffersSoringType): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);

  const handleSortChange = (option: SortType) => {
    dispatch(sortOffers(option));
    setIsOpened(false);
  };
  // eslint-disable-next-line no-console
  console.log('SORTING RERENDERED!');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
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
              onClick={() => handleSortChange(option)}
            >
              {option}
            </li>))
        }
      </ul>
    </form>
  );
};

export const MemoizedOffersSorting = memo(OffersSorting);
