import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/api';
import { AppRoutes } from '../../constants/routes';
import { AppSection } from '../../constants/sections';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { putFavoriteOffer } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';

type BookmarkButtonProps = {
  offerId: number,
  isFavorite?: boolean,
  section: AppSection;
}

export const BookmarkButton = ({ offerId, isFavorite, section }: BookmarkButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authStatus = useAppSelector(getAuthorizationStatus);

  const handleClick = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(putFavoriteOffer({ id: offerId, status: !isFavorite }));
    } else {
      navigate(AppRoutes.Login);
    }
  };

  const sectionClassName = getClassName(section);
  const imageSizes = getImageSizes(section);

  return (
    <button className={`${sectionClassName}__bookmark-button ${isFavorite ? `${sectionClassName}__bookmark-button--active ` : ''}button`}
      type="button"
      onClick={handleClick}
    >
      <svg className='place-card__bookmark-icon' {...imageSizes}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};

const getClassName = (section: AppSection): string => {
  switch (section) {
    case AppSection.Main:
      return 'place-card';
    case AppSection.Property:
      return 'property';
    default:
      return 'place-card';
  }
};

const getImageSizes = (section: AppSection) => {
  switch (section) {
    case AppSection.Main:
      return {
        width: '18',
        height: '19',
      };
    case AppSection.Property:
      return {
        width: '31',
        height: '33',
      };
    default:
      return {
        width: '18',
        height: '19',
      };
  }
};
